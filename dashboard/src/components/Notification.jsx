import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/auth/authService";
import { useNavigate, Link } from "react-router-dom";

const Notification = ({showNotif, setShowNotif}) => {
  return (
    <div>
    <div class="abosolute" data-te-dropdown-ref>
      <ul
        class={`absolute z-[1000] ${showNotif ? 'block': 'hidden' } float-left right-24 top-14 m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block`}
        aria-labelledby="dropdownMenuButton1d"
        data-te-dropdown-menu-ref
      >
          <p className="bg-gray-400 rounded-xl text-sm m-2 p-2 text-white"> Ce module sera bientôt disponible  </p>

        <li>
          <Link
            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            to={''}
            data-te-dropdown-item-ref
          >
          <p className="flex flex-row gap-2 items-center justify-start  "><span className="bg-red-500 rounded-full p-2 text-white text-xs"> 1 </span> notif 1</p> 
          </Link>
        </li>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
          <p className="flex flex-row gap-2 items-center justify-start  "><span className="bg-red-500 rounded-full p-2 text-white text-xs"> 2 </span> notif 2</p> 
          </a>
        </li>
        {/* <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            Something else here
          </a>
        </li> */}
     
      </ul>
    </div>
  </div>
  )
}

export default Notification