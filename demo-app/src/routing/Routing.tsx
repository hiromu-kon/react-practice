/* react */
import { memo, VFC } from "react";
/* react-router-dom */
import {  Route, Routes } from "react-router-dom";
/* routing */
import { RoutingPath } from './RoutingPath';
/* components */
import { Home } from "../components/pages/Home";
import { Profile } from "../components/pages/Profile";

/**
 * Routing
 * @returns
 */
export const Routing: VFC = memo(() => {
  return (
    <Routes>
      <Route path={RoutingPath.Top.path} element={<Home />} />
      <Route path={RoutingPath.Profile.path} element={<Profile />} />
    </Routes>
  )
});
