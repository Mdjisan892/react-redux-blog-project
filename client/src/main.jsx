import "./index.css";
import App from "./App.jsx";
import Error from "./Components/Error.jsx";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./Components/Pages/Home/Home.jsx";
import MyBlogs from "./Components/MyBlogs/MyBlogs.jsx";
import ContactPage from "./Components/Contact/ContactPage.jsx";
import UpdateForm from "./Components/UpdateBlog/UpdateForm.jsx";
import SingleBlog from "./Components/Pages/blogs/SingleBlog.jsx";
import AdminDashBoard from "./Components/Admin/AdminDashBoard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Components/Profile/Profile.jsx";
import ProtectedRouts from "./utils/ProtectedRout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/AdminDashBoard",
        element: (
          <ProtectedRouts isAllowed={true}>
            <AdminDashBoard />
          </ProtectedRouts>
        ),
      },
      {
        path: "/MyBlogs",
        element: (
          <ProtectedRouts isAllowed={true}>
            <MyBlogs />
          </ProtectedRouts>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "/UpdateForm",
        element: (
          <ProtectedRouts isAllowed={true}>
            <UpdateForm />
          </ProtectedRouts>
        ),
      },
      {
        path: "/Profile",
        element: (
          <ProtectedRouts isAllowed={true}>
            <Profile />
          </ProtectedRouts>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-lrcm2zsfuaxkvw3d.us.auth0.com"
    clientId="80tKFfGozjj2XAq3fQ3yvtx1i5ZrVpxd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
