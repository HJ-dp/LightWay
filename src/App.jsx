import { Global } from "@emotion/react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Router from "./routes/Router";
import StyleProvider from "./context/ContextProvider";

// FB
import "./firebase";

function App() {
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
