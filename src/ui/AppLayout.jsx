import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Header from "./Header";
import Footer from "./Footer";
=======
import Footer from "./footer";
import ContactForm from "../pages/ContactForm";
import DoctorForm from "../features/Doctors/DoctorForm ";
>>>>>>> master

function AppLayout() {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      <main>
        <Outlet />
      </main>
=======
      <h1>App Layout</h1>
      <main>
        <Outlet />
      </main>
      <ContactForm />
      <DoctorForm />
>>>>>>> master
      <Footer />
    </div>
  );
}

export default AppLayout;
