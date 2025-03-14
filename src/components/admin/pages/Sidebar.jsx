"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import {
  MdLogout,
  MdOutlinePermContactCalendar,
  MdOutlineWidgets,
} from "react-icons/md";
import { FaHome, FaVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "@/redux/authSlice";
import { FcBullish, FcMultipleCameras } from "react-icons/fc";
import { MdOutlineAddCircleOutline } from "react-icons/md";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const sidebarRef = useRef(null);

  // Function to handle logout
  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
    router.push("/login");
  };

  const handleToggle = () => {
    const collapsed = !isCollapsed;
    setIsCollapsed(collapsed);
    localStorage.setItem("sidebarCollapsed", collapsed?.toString());
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsCollapsed(true);
          localStorage.setItem("sidebarCollapsed", "true");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  const menuItems = [
    { href: "/", icon: <FaHome />, label: "Back To Home" },
    { href: "/admin/dashboard", icon: <FcBullish />, label: "Dashboard" },

    {
      href: "/admin/create-job",
      icon: <MdOutlineAddCircleOutline />,
      label: "Add Job",
    },
    {
      href: "/admin/get-job",
      icon: <MdOutlineWidgets />,
      label: "Get Jobs",
    },
    {
      href: "/admin/get-contact",
      icon: <MdOutlinePermContactCalendar />,
      label: "Get Contact",
    },
    // {
    //   href: "/admin/create-video",
    //   icon: <FaVideo />,
    //   label: "Add Video",
    // },
    // {
    //   href: "/admin/getAllGallery",
    //   icon: <FcMultipleCameras />,
    //   label: "Get All Gallery",
    // },
    // {
    //   href: "/admin/product-create",
    //   icon: <PiStudentFill />,
    //   label: "Create Product",
    // },
    // {
    //   href: "/admin/product-getAll",
    //   icon: <PiStudentFill />,
    //   label: "Get Product",
    // },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed h-screen top-0 overflow-y-scroll ${
        isCollapsed ? "w-20" : "w-64"
      } bg-white transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {/* Logo section */}
        <div
          className={`${
            isCollapsed ? "hidden" : "block"
          } text-gray-600 font-bold text-xl`}
        ></div>
        {/* Toggle button */}
        <button
          onClick={handleToggle}
          className="bg-transparent border-none w-8 h-8 flex justify-center items-center cursor-pointer text-gray-600"
        >
          {isCollapsed ? <CiMenuFries size={22} /> : <RxCross1 size={22} />}
        </button>
      </div>

      {/* Navigation links */}
      <ul className="text-gray-600 list-none flex flex-col gap-2 p-4 mb-14">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={handleToggle}
              className={`text-gray-600 py-4 flex items-center hover:border-r-4 hover:border-black ${
                router.pathname === item.href ? "border-r-4 border-black" : ""
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span
                className={`ml-4 text-xl ${isCollapsed ? "hidden" : "block"}`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* User and logout section */}
      <div className="absolute bottom-3 left-2 right-2 overflow-hidden mt-10">
        <div
          className={`flex items-center justify-center w-full ${
            isCollapsed
              ? "w-11 h-11 rounded-full bg-slate-400 "
              : "bg-slate-400 py-2 px-4 rounded-lg"
          }`}
        >
          <div
            className={`cursor-pointer flex items-center justify-center text-gray-600 ${
              isCollapsed ? "w-10 h-10 rounded-full" : ""
            }`}
          >
            {isCollapsed ? (
              <AiOutlineUser size={20} />
            ) : (
              <span className="text-xl">
                {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1)}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className={`bg-red-600 text-white text-xl flex items-center justify-center mt-2 ${
            isCollapsed
              ? "w-12 h-12 rounded-full"
              : "py-2 px-4 w-full rounded-lg"
          }`}
        >
          {isCollapsed ? (
            <MdLogout />
          ) : (
            <span className="flex gap-1 items-center text-xl">
              <MdLogout /> Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
