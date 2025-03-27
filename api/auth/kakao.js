import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const privateKey = import.meta.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");
const clientEmail = import.meta.env.VITE_CLIENT_EMAIL;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

// 중복 초기화 방지
if (!getApps().length) {
  initializeApp({
    credential: cert({
      privateKey,
      clientEmail,
      projectId,
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { token } = req.body;

    // 1. Kakao 서버에 유저 정보 요청
    const kakaoRes = await fetch("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await kakaoRes.json();

    if (!userInfo.id) {
      return res.status(400).json({ error: "Invalid Kakao token" });
    }

    // 2. Firebase용 uid 지정
    const uid = `kakao:${userInfo.id}`;

    // 3. Custom token 생성
    const firebaseToken = await getAuth().createCustomToken(uid, {
      email: userInfo.kakao_account?.email || "",
      nickname: userInfo.properties?.nickname || "",
    });

    return res.status(200).json({ firebaseToken });
  } catch (err) {
    console.error("Kakao login error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
