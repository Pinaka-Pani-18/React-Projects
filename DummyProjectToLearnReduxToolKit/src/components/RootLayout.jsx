import { Outlet } from "react-router-dom";
import NavbarPage from "./Navbar";
const RootLayout = () => {
  return (
    <>
      <NavbarPage />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
