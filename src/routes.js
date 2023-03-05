import React from "react";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import { Error } from "./pages/Error/Error";
import { Blog } from "./pages/Blog/Blog";
import { Messages } from "./pages/Messages/Messages";
import { Search } from "./pages/Search/Search";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { RequireAuth } from 'react-auth-kit'

/**
Routes are defined as follows:
 [
  0: The route e.g. /profile/:id/:username
  1: The React component to render for this route
  2: BOOLEAN - if true, this is a secure route and the user must be logged in
 ]
 */

const nonAdminRoutes = [
  ["/blog", <Blog />],
  ["/blog/:id", <Blog />],
  ["/dashboard", <Dashboard />, true],
  ["/error", <Error />],
  ["/", <Home />],
  ["/login", <Login />],
  ["/messages", <Messages />, true],
  ["/profile", <Profile />, true],
  ["/profile/:id", <Profile />, true],
  ["/search", <Search />, true],
];

const adminRoutes = [["/admin/login", <div>admin login</div>]];

const secure = (component) => {
  return <RequireAuth loginPath={'/login'}>{component}</RequireAuth>
}

const routeLoader = (branches) => {
  let output = [];
  for (const leaf of branches) {
    output.push({
      path: leaf[0],
      element: leaf[2] ? secure(leaf[1]) : leaf[1],
    });
  }
  return output;
};

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <App error={true} />,
    children: routeLoader(nonAdminRoutes),
  },
  {
    path: "/admin",
    element: <div>Admin</div>,
    errorElement: <Error />,
    children: routeLoader(adminRoutes),
  },
];

export default routes;
