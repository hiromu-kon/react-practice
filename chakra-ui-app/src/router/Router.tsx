import { memo, VFC } from "react";
import {  Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {

  return (
    <Routes>
      <Route path="home" >
        <Route path="" element={<HeaderLayout><Home/></HeaderLayout>}/>
        <Route path="user_management" element={<HeaderLayout><UserManagement /></HeaderLayout>} />
        <Route path="setting" element={<HeaderLayout><Setting /></HeaderLayout>} />
      </ Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
});
