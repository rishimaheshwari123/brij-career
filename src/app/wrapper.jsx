"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import Footer from "@/components/comman/Footer";
import TopHeader from "@/components/comman/TopBar";
import FixedIcons from "@/components/comman/FixedIcons";
import Navbar from "@/components/comman/Navbar";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <Provider store={store}>
      {isAdminRoute ? null : <Navbar />}
      {isAdminRoute ? null : (
        <div className="hidden lg:block">
          <TopHeader />
        </div>
      )}

      {children}
      <ToastContainer />
      {isAdminRoute ? null : <FixedIcons />}
      {isAdminRoute ? null : <Footer />}
    </Provider>
  );
};

export default Wrapper;
