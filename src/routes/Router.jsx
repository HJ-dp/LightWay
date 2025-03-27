import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageURL from "./PageURL";
//레이아웃
import Layout from "../components/layout/Layout";

//페이지
import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import NaverCallback from "../components/pages/Navercallback";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageURL.login} element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path={PageURL.main} element={<MainPage />} />
          <Route path={PageURL.naverCallback} element={<NaverCallback />} />
          <Route path={PageURL.error} element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
