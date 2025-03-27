import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const useAppleLogin = () => {
  const navigate = useNavigate();

  const signInWithApple = async () => {
    try {
      const provider = new OAuthProvider("apple.com");
      const result = await signInWithPopup(auth, provider);
      console.log("✅ apple 로그인 성공:", result.user);
      navigate("/");
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
    }
    return signInWithApple;
  };
};
