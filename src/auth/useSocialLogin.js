import { signInWithGoogle } from "./social/google";
import { signInWithApple } from "./social/apple";
import { signInWithKakao } from "./social/kakao";
import signInWithNaver from "./social/naver";

export const useSocialLogin = () => {
  return {
    google: signInWithGoogle,
    apple: signInWithApple,
    kakao: signInWithKakao,
    NaverBtn: signInWithNaver,
  };
};
