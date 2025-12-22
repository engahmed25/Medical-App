import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import DoctorRegisterWizard from "./features/Authentication/DoctorRegisterWizard.jsx";
import PatientRegisterFormWizard from "./features/Authentication/PatientRegisterFormWizard.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import DrInfo from "./features/Appointments/DrInfo.jsx";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import AllDoctors from "./pages/AllDoctors.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import MedicalHistory from "./features/Patients/MedicalHistory/MedicalHistory.jsx";
import { Toaster } from "react-hot-toast";
import DoctorCard from "./ui/DoctorCard.jsx";
import AppointmentCard from './ui/AppointmentCard.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <AllDoctors />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/doctor/:id",
        element: <Doctor />,
      },
      {
        path: "/appointments",
        element: <MyAppointments />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register/doctors",
    element: <DoctorRegisterWizard />,
  },

  {
    path: "/register/patients",
    element: <PatientRegisterFormWizard />,
  },
  {
    path: "/patient/dashboard",
    element: <PatientDashboard />,
  },
  {
    path: "/doctor/info",
    element: <DrInfo />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/doctor/dashboard",
        element: <DoctorDashBoard />,
      },
      {
        path: "/doctor/patientList",
        element: <PatientList />,
      },
    ],
  },
  {
    path: "/confirmappointmentpage",
    element: <ConfirmAppointmentPage />,
  },
  // {
  //   path: "/patient/patientinfo",
  //   element: <PatientInfo />,
  // },
]);

function App() {
  // console.log("Available exports:", Object.keys(authKit));
  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster position="top-center" />
      </AuthProvider>
    </>
  );
}

export default App;
