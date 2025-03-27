import { useEffect } from "react";
import { Global } from "@emotion/react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Router from "./routes/Router";
import StyleProvider from "./context/ContextProvider";
import { AuthProvider } from "./context/AuthContext";
// FB
import "./firebase";

function App() {
  return (
    <>
      <AuthProvider>
        <StyleProvider>
          <Global styles={GlobalStyles} />
          <Router />
        </StyleProvider>
      </AuthProvider>
    </>
  );
}

export default App;
