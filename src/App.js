import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { ProductsData } from "./api/api";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={ProductsData}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}>
        {/* <Header />
        <Banner />
        <Footer /> */}
      </RouterProvider>
    </div>
  );
}

export default App;
