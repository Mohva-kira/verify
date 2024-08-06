import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { CiChat2 } from "react-icons/ci";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../assets/avatar.avif";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useSelector } from "react-redux";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();


  const profile = useSelector(state => state.profile)

  const [showProfile, setShowProfile] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  console.log('showw', showNotif)
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {/* <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        /> */}

        {/* <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<CiChat2 />}
        /> */}

        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => {
            setShowNotif(!showNotif)
            setShowProfile(false)
            }}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {handleClick("userProfile")
            setShowProfile(!showProfile) 
            setShowNotif(false)
          }}
          >
            <img src={avatar} className="rounded-full w-8 h-8" alt="" />

            <p>
              <span className="text-gray-400 text-14"> Bonjour, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {" "}
                {profile?.profile?.data[0]?.attributes.nom}{" "}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
         <Notification showNotif={showNotif} setShowNotif={setShowNotif}  />
        {isClicked.userProfile && (
          
            <UserProfile showProfile={showProfile}  setShowProfile={setShowProfile}  />
       
        )}
      </div>
    </div>
  );
};

export default Navbar;
