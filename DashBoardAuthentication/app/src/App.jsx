import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";
import SignUp from "./Auth/SignUp/SignUp";
import SignIn from "./Auth/SignIn/SignIn";
import RegisterEmailVerify from "./Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccessful from "./Auth/RegisterSuccessful/RegisterSuccessful";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register-email-verify",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccessful />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-success",
    element: <ForgotPasswordSent />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
