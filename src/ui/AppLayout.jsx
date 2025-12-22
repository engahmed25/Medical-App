import { Outlet } from "react-router-dom";
import Footer from "./footer";
import ContactForm from "../pages/ContactForm";
import DoctorForm from "../features/Doctors/DoctorForm ";

function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <main>
        <Outlet />
      </main>
      <ContactForm />
      <DoctorForm />
      <Footer />
    </div>
  );
}

export default AppLayout;
