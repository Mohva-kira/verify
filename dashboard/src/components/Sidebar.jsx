import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo-transparent.png'

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  const user = localStorage.getItem('auth')? JSON.parse(localStorage.getItem('auth')) : null
  // console.log('user' ,user)
 
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normaLink =
    "flex items-center gap-5 pl-4 pt=3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-balck hover:bg-light-gray";

  const handleColseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return ( user.jwt && (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleColseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
               <img src={logo} className="w-56 h-auto" /> 
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>

                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    onClick={handleColseSideBar}
                    style={({ isActive }) => ({backgroundColor: isActive ?
                              currentColor: ''}) }
                    className={({ isActive }) =>
                      isActive ? activeLink : normaLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>)
  );
};

export default Sidebar;
