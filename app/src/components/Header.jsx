import React, { useState } from "react";
import logo from "../assets/logo.png"
import { Link, useLocation, useNavigate,  } from "react-router-dom";


const Header = ({history}) => {

    const [show, setShow] = useState(false)
    const auth = localStorage.getItem('auth') && localStorage.getItem('auth') !== "undefined" ? JSON.parse(localStorage.getItem('auth')) : null
    // const navigate = useNavigate()
    console.log(show)
    console.log('auh', auth)

    
  return (
    
      <header className="bg-white ">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-50"
          aria-label="Global"
        >
    
            
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
         { !show && <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 z-50"
                onClick={() => setShow(!show)}
              >
              {/* <span className="sr-only">Open main menu</span> */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="red"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>}
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            

         
          </div>
         {!auth && <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a onClick={() => window.location.href = '/auth'} className="text-sm font-semibold leading-6 text-gray-900">
              Connexion <span aria-hidden="true">&rarr;</span>
            </a>
          </div> }
          {auth && <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a onClick={() => window.location.href = '/auth'} className="text-sm font-semibold leading-6 text-gray-900">
              Deconnexion <span aria-hidden="true">&rarr;</span>
            </a>
          </div> }


        </nav>

        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-0"></div>
          <div className={`fixed ${show ? 'block' : 'hidden'} inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-16 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setShow(!show)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  
                </div>
                {auth ? <div className="py-6">
                  <a
                    to='/auth'
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {localStorage.clear(); window.location.href = '/auth'}}
                  >
                    Deconnexion
                  </a>
                </div> : <div className="py-6">
                  <a
                    onClick={() => window.location.href = '/auth'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Connexion
                  </a>
                  
                </div>}
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
