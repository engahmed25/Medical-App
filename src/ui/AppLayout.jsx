import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Search from "./Search";
import DoctorCard from "./DoctorCard";
import DoctorList from "./DoctorList";
function AppLayout() {
  return (
    <div>
      <h1 className="text-3xl font-bold ">App Layout</h1>
      <main>
        <Outlet />
        <Search />
        <DoctorCard name="John Doe" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." specialization="Cardiology" price="100" status="Available" image="https://via.placeholder.com/150" />
        <DoctorList />
      </main>
      <Footer />
      
    </div>
  );
}

export default AppLayout;
