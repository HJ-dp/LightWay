import { useEffect } from "react";

const loadNaverSDK = () => {
  return new Promise((resolve, reject) => {
    if (window.naver) return resolve(window.naver);

    const script = document.createElement("script");
    script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    script.onload = () => resolve(window.naver);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export default function signInWithNaver() {
  useEffect(() => {
    loadNaverSDK().then(() => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
        callbackUrl: "https://your.site/naver/callback",
        isPopup: true,
        loginButton: { color: "green", type: 3, height: 40 },
      });

      naverLogin.init();
    });
  }, []);

  return <div id="naverIdLogin" />;
}
