import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("✅ Google 로그인 성공:", result.user);
    return result.user;
  } catch (error) {
    console.error("❌ Google 로그인 실패:", error);
  }
};
