import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../firebase";

export const signInWithNaver = async () => {
  const kakaoToken = await window.Kakao.Auth.login(); // 예시, 실제 SDK 호출 방식 다름

  const res = await fetch("/api/auth/kakao", {
    method: "POST",
    body: JSON.stringify({ token: kakaoToken }),
    headers: { "Content-Type": "application/json" },
  });

  const { firebaseToken } = await res.json();
  const result = await signInWithCustomToken(auth, firebaseToken);
  return result.user;
};
