import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Page_URL from "../../routes/PageURL";

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("✅ Google 로그인 성공:", result.user);
      navigate(Page_URL.main);
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
    }
  };

  return signInWithGoogle;
};
