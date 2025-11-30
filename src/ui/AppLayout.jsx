import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Search from "./Search";
import Navbar from "./Navbar";

import DoctorCard from "./DoctorCard";
import DoctorList from "./DoctorList";
function AppLayout() {
  return (
    <div>
      <Navbar/>
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
