import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { Bounce, ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

// App layout should NOT hold Provider anymore
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Namaste React",
    email: "email@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user }}>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, // replace with your real login component
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        index: true,
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the whole RouterProvider in Provider
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
