import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Register from "./pages/Register.jsx";
import DoctorRegisterForm from "./features/Authentication/DoctorRegisterForm.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/doctors",
    element: <DoctorRegisterForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
