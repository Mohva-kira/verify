import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/auth/authService";
import { useNavigate, Link } from "react-router-dom";
const UserProfile = ({showProfile, setShowProfile}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = async () => {

try {
  localStorage.clear()
  dispatch(setAuth(null))
  navigate('/')
} catch (error) {
  console.error('erreur', error)
}
      
      

  }
  return (
    <div>
      <div class="abosolute" data-te-dropdown-ref>
       
        <ul
          class={`absolute z-[1000] ${showProfile ? '': 'hidden' } float-left right-0 top-14 m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block`}
          aria-labelledby="dropdownMenuButton1d"
          data-te-dropdown-menu-ref
        >
          <li>
            <Link
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to={'profile'}
              data-te-dropdown-item-ref
            >
            <p className="flex flex-row gap-2 items-center justify-start  "><AiOutlineProfile /> Profile</p> 
            </Link>
          </li>
          <li>
            <a
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
            <p className="flex flex-row gap-2 items-center justify-start  "> <CiSettings /> Configuration </p>
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
          <hr class="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
          <li>
            <a
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
              onClick={() => logout()}
            >
              <p className="flex flex-row gap-2 items-center justify-start text-lg text font-bold"> <RiLogoutCircleLine />  Deconnexion </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
