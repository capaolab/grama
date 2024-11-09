import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { HiCube } from "react-icons/hi";

function SideBar() {
  return (
    <nav
      className="min-h-[40rem] max-h-screen ml-1 my-1 w-72 pl-8 py-10 primary-gradient text-white rounded-l-2xl"
    >
      <Link href='#' className="flex items-center gap-2">
        <FaStarOfLife className="text-2xl text-secondary-1" />
        <h3 className="font-semibold">Grama</h3>
      </Link>
      <span className="block font-mono text-lg mt-12">MENU</span>
      <li className="list-none flex flex-col mt-3 gap-4">
        <ul>
          <Link href="#" className="navBar-link group">
            <div
              className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-secondary-1 rounded-r-md"
            >
            </div>
            <RiDashboardFill className="text-2xl group-hover:text-secondary-1" />
            <p className="group-hover:font-semibold text-white">Visão Geral</p>
          </Link>
        </ul>
        <ul>
          <Link href="#" className="navBar-link group">
            <div
              className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-secondary-1 rounded-r-md"
            >
            </div>
            <IoBarChartOutline className="text-2xl group-hover:text-secondary-1" />
            <p className="group-hover:font-semibold text-white">Estatísticas</p>
          </Link>
        </ul>
        <ul>
          <Link href="#" className="navBar-link group">
            <div
              className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-secondary-1 rounded-r-md"
            >
            </div>
            <IoIosPeople className="text-2xl group-hover:text-secondary-1" />
            <p className="group-hover:font-semibold text-white">Clientes</p>
          </Link>
        </ul>
        <ul>
          <Link href="#" className="navBar-link group">
            <div
              className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-secondary-1 rounded-r-md"
            >
            </div>
            <HiCube className="text-2xl group-hover:text-secondary-1" />
            <p className="group-hover:font-semibold text-white">Produto</p>
          </Link>
        </ul>
      </li>
    </nav>
  )
}

export default SideBar;
