/* eslint-disable react/prop-types */
import {
  FiCalendar,
  FiChevronDown,
  FiDollarSign,
  FiLock,
  FiLogIn,
  FiMenu,
  FiMessageCircle,
  FiMoon,
  FiPackage,
  FiSun,
  FiUserPlus,
} from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

export default function InstructorDashboard({ darkMode, toggleDarkMode }) {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FiMenu className="w-6 h-6" />
      </button>

      <div className="flex justify-between min-h-screen">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <Link
                  to="/dashboard-student"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiPackage className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Instructor Dashboard</span>
                </Link>
                <button onClick={toggleDarkMode}>
                  {" "}
                  {darkMode ? (
                    <FiSun className="w-6 h-6 dark:text-gray-200" />
                  ) : (
                    <FiMoon className="w-6 h-6 dark:text-gray-200" />
                  )}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <FiPackage className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Pages
                  </span>
                  <FiChevronDown className="w-6 h-6" />
                </button>
                <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Kanban
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="add-class"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiCalendar className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Add Class</span>
                </Link>
              </li>
              <li>
                <Link
                  to="my-class"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiDollarSign className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">My Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiMessageCircle className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiLogIn className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Login</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiUserPlus className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Register</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FiLock className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Forgot Password</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-full md:ml-64 md:p-4 bg-slate-500 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
