import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../firebase";
import Page_URL from "../../routes/PageURL";

const loadKakaoScript = () => {
  return new Promise((resolve, reject) => {
    if (window.Kakao) return resolve(window.Kakao);

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.onload = () => resolve(window.Kakao);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export const signInWithKakao = async () => {
  const Kakao = await loadKakaoScript();

  if (!Kakao.isInitialized()) {
    Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
  }

  return new Promise((resolve, reject) => {
    window.Kakao.Auth.login({
      scope: "profile_nickname",
      success: async function (authObj) {
        try {
          const res = await fetch("/api/auth/kakao", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: authObj.access_token }),
          });

          const { firebaseToken } = await res.json();
          const result = await signInWithCustomToken(auth, firebaseToken);

          resolve(result.user);
          window.location.href = Page_URL.main;
        } catch (error) {
          reject(error);
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};
