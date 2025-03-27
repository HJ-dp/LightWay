import { useGoogleLogin } from "./social/google";
import { useAppleLogin } from "./social/apple";
import { signInWithKakao } from "./social/kakao";
import signInWithNaver from "./social/naver";

export const useSocialLogin = () => {
  return {
    google: useGoogleLogin,
    apple: useAppleLogin,
    kakao: signInWithKakao,
    NaverBtn: signInWithNaver,
  };
};
