import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const useLogout = async () => {
  await signOut(auth);
};
