import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");
const clientEmail = process.env.CLIENT_EMAIL;
const projectId = process.env.FIREBASE_PROJECT_ID;

if (!getApps().length) {
  initializeApp({
    credential: cert({ privateKey, clientEmail, projectId }),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { token } = req.body;

    const naverRes = await fetch("https://openapi.naver.com/v1/nid/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await naverRes.json();
    const profile = data.response;

    if (!profile || !profile.id) {
      return res.status(400).json({ error: "Invalid Naver token" });
    }

    const uid = `naver:${profile.id}`;
    const firebaseToken = await getAuth().createCustomToken(uid, {
      email: profile.email || "",
      nickname: profile.nickname || "",
    });

    return res.status(200).json({ firebaseToken });
  } catch (err) {
    console.error("🔥 Naver login error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
