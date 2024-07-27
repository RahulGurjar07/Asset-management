import { Link, NavLink } from "react-router-dom";


export default function Navbar() {


  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" >
            <img
              src="./pngwing.png"
              alt="logo"
              className="h-12 w-12"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <img
              className="h-12 w-12 rounded-3xl object-cover bg-blue-500 mx-1"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="user"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                Dan Abromov
              </span>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feature"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/benefits"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                      border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Benefits
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}