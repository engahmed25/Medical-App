import { Outlet } from "react-router-dom";
import Footer from "./footer";

function AppLayout() {
  return (
    <div>
      <h1 className="text-3xl font-bold ">App Layout</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
