import { useEffect } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Page_URL from "../../routes/PageURL";

export default function NaverCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.replace("#", "?")).get(
      "access_token"
    );

    if (!token) return;

    fetch("/api/auth/naver", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then(async ({ firebaseToken }) => {
        await signInWithCustomToken(auth, firebaseToken);
        navigate(Page_URL.main);
      });
  }, []);

  return <div>로그인 처리 중...</div>;
}
