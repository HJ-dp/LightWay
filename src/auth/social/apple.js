import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

export const signInWithApple = async () => {
  const provider = new OAuthProvider("apple.com");
  const result = await signInWithPopup(auth, provider);
  return result.user;
};
