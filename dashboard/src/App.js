import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  ProtectedRoute,
} from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
  Auth,
  Auteurs,
  Profile,
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
localStorage.clear()
const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    setActiveMenu
  } = useStateContext();
  const stateToken = useSelector((state) => state?.auth.data?.jwt);
  const token = stateToken
    ? stateToken
    : JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth"))?.jwt
    : null;
  console.log("le token", token);
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setIsAuthenticated(token ? true : false);
    setActiveMenu(token ? true : false)
  }, [token]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl 
              hover:bg-light-gray text-white"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <>
              {isAuthenticated && (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              )}
            </>
          ) : (
            <>
              {" "}
              {isAuthenticated && (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
            </>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  
          w-full ${isAuthenticated && activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            {isAuthenticated && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar isAuthenticated={isAuthenticated} />
              </div>
            )}
            <ToastContainer />

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Auth />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/ecommerce" element={<Ecommerce />} />
                </Route>
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />

                {/* Pages */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/orders" element={<Orders />} />
                </Route>
                <Route path="/auteurs" element={<Auteurs />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/line" element={<Line />} />
                </Route>
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
