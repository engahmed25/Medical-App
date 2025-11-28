import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Register from "./pages/Register.jsx";
import DoctorRegisterForm from "./features/Authentication/DoctorRegisterForm.jsx";
import DoctorUploadFilesForm from "./features/Authentication/DoctorUploadFilesForm.jsx";
import DoctorRegisterWizard from "./features/Authentication/DoctorRegisterWizard.jsx";
import PatientRegisterForm from "./features/Authentication/PatientRegisterForm.jsx";
import PatientRegisterFormWizard from "./features/Authentication/PatientRegisterFormWizard.jsx";
import AllDoctors from "./pages/AllDoctors.jsx";
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
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/doctors",
    element: <DoctorRegisterWizard />,
  },

  {
    path: "/register/patients",
    element: <PatientRegisterFormWizard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
