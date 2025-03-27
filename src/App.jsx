import { useEffect } from "react";
import { Global } from "@emotion/react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Router from "./routes/Router";
import StyleProvider from "./context/ContextProvider";

// FB
import "./firebase";

function App() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "naver-login-success") {
        console.log("네이버 로그인 성공 메시지 받음");
        navigate("/");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <>
      <StyleProvider>
        <Global styles={GlobalStyles} />
        <Router />
      </StyleProvider>
    </>
  );
}

export default App;
