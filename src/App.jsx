import Router from "./routes/Router";
import { Global } from "@emotion/react";

import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Router />
    </>
  );
}

export default App;
