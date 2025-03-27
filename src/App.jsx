import Router from "./routes/Router";
import { Global } from "@emotion/react";

import GlobalStyles from "./components/styles/GlobalStyles";
import StyleProvider from "./context/ContextProvider";

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
