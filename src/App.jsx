import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <h1>register</h1> },
    { path: "/forget-password", element: <h1>forget-password</h1> },
    { path: "/reset-password", element: <h1>reset-password</h1> },
    { path: "/about-us", element: <h1>about-us</h1> },
    { path: "/contact-us", element: <h1>contact-us</h1> },
    {
      path: "/todos",
      element: (
        <ProtectedRoutes>
          <h1>todos</h1>
        </ProtectedRoutes>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
