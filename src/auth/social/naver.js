export const signInWithNaver = () => {
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
    callbackUrl: "https://light-way-hj-dps-projects.vercel.app/naver/callback",
    isPopup: true,
    loginButton: { color: "green", type: 3, height: 40 },
  });

  naverLogin.init();
  naverLogin.login();
};
