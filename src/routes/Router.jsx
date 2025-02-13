import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageURL from "./PageURL";
import MainPage from "../components/pages/MainPage";
import Layout from "../components/layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PageURL.main} element={<MainPage />} />
          <Route path={PageURL.Error} element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
