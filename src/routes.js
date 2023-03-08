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
import { RequireAuth } from "react-auth-kit";
import { Signup } from "./pages/Signup/Signup";
import { Checkout } from "./pages/Checkout/Checkout";
import { Pricing } from "./pages/Pricing/Pricing";
import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword";

/**
Routes are defined as follows:
 [
  0: path: The route e.g. /profile/:id/:username
  1: element: The React component to render for this route
  2: secure: BOOLEAN - if true, this is a secure route and the user must be logged in,
  3: loader: function to load data before rendering `async ({ request, params }) => {}`
  4: action: mutator function `async ({ request }) => {}`
  5: errorElement: Error element ot render (beyond the global)
 ]
 */

const nonAdminRoutes = [
  ["/blog", <Blog />],
  ["/blog/:id", <Blog />],
  ["/dashboard", <Dashboard />, true],
  ["/error", <Error />],
  ["/", <Home />],
  ["/login", <Login />],
  ["/signup", <Signup />],
  ["/forgot-password", <ForgotPassword />],
  ["/pricing", <Pricing />],
  ["/checkout", <Checkout />, true],
  ["/messages", <Messages />, true],
  ["/profile", <Profile />, true],
  ["/profile/:id", <Profile />, true],
  ["/search", <Search />, true],
];

const adminRoutes = [["/admin/login", <div>admin login</div>]];

const secure = (component) => {
  return <RequireAuth loginPath={"/login"}>{component}</RequireAuth>;
};

const routeLoader = (branches) => {
  let output = [];
  for (const leaf of branches) {
    output.push({
      path: leaf[0],
      element: leaf[2] ? secure(leaf[1]) : leaf[1],
      ...(leaf[3] && { loader: leaf[3] }),
      ...(leaf[4] && { action: leaf[4] }),
      ...(leaf[5] && { errorElement: leaf[5] }),
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
