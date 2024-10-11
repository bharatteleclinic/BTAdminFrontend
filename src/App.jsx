import React from "react";
import Navbar, { width } from "./components/Navbar";
import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Footer from "./components/Footer";
import Patients from "./pages/Patients";
import Appointement from "./pages/Appointement";
import Doctor from "./pages/Doctor";
import Administration from "./pages/Administration";
import Emr from "./pages/Emr";
import Reports from "./pages/Reports";
import Billing from "./pages/Billing";
import Access from "./pages/Access";
import Inventory from "./pages/Inventory";
import Package from "./pages/Package";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  const Layout = () => {
    return (
      <div >
        <header style={{height:"10vh" ,width}} >
          <Navbar />
        </header>
        <main  style={{ width:`${100%-width}`, float:"right", background: "yellow" }}>
          <Outlet />
        </main>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/patient",
          element: <Patients />,
        },
        {
          path: '/appointement',
          element: <Appointement />
        },
        {
          path: "/doctor",
          element: <Doctor />,
        },
        {
          path: "/administration",
          element: <Administration />,
        },
        {
          path: '/emr',
          element: <Emr />
        },
        {
          path: "/report",
          element: <Reports />,
        },
        {
          path: "/billing",
          element: <Billing />,
        },
        {
          path: '/access',
          element: <Access />
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/package",
          element: <Package />,
        },
        {
          path: '/admin',
          element: <Appointement />
        },

      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
