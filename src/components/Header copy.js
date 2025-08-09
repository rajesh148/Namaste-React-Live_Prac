import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/FoodVillaLogo.jpg";
import UserContext from "../utils/UserContext";

function loggedInUser() {
  //some api calls
  return false;
}

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        alt="logo"
        // src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
        src={Logo}
      />
    </a>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className="w-full bg-red-200 shadow">
        <div className="justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">
                  <Title />
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/about">About</Link>
                </li>
                <li className="text-white-600 hover:text-blue-600">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/instamart">Instamart</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/cart">Cart</Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600 font-bold">
                  {user.name}
                </li>
                {loggedIn ? (
                  <button
                    className="px-4 h-21 mx-4 bg-slate-500 rounded"
                    onClick={() => setLoggedIn(false)}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="px-4 h-21 mx-4  bg-orange-500 rounded"
                    onClick={() => setLoggedIn(true)}
                  >
                    Login
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
