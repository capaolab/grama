'use client'

import Link from "next/link";
import { FaStarOfLife, FaUserCircle } from "react-icons/fa";
import { RiDashboardFill, RiShieldKeyholeLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { HiCube } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { MdSwapHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { TbSettings2 } from "react-icons/tb";

function SideBar() {

  return (
    <div className="h-screen pl-1 py-1">
      <nav
        className="relative h-full flex flex-col min-h-[900px] w-64 py-10 px-8 bg-[var(--bg-sidebar)]
      text-[var(--text-sidebar)] shrink-0 shadow-[-2px_1px_20px_0px_var(--shadow-color-sidebar)] rounded-l-2xl trasition-effect"
        style={{ background: "var(--bg-sidebar)" }}
      >
        <Link href='#' className="flex items-center gap-2">
          <FaStarOfLife className="text-2xl text-[var(--secondary-color)]" />
          <h3 className="font-semibold">Grama</h3>
        </Link >
        <h3 className="block font-mono text-lg mt-12">MENU</h3>
        <li className="list-none flex flex-col mt-3 gap-4">
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <RiDashboardFill className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Visão Geral</p>
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <IoBarChartOutline className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Estatísticas</p>
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <IoIosPeople className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Clientes</p>
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <HiCube className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Produto</p>
              <MdOutlineKeyboardArrowDown className="text-2xl ml-8 group-hover:text-[var(--secondary-color)]" />
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <BiMessageDetail className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Mensagens</p>
              <div className="w-8 h-6 bg-[var(--secondary-color)] text-black rounded-full flex justify-center items-center">13</div>
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <MdSwapHoriz className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Transações</p>
            </Link>
          </ul>
          <hr className="my-6 border-gray-600" />
          <h3 className="block font-mono text-lg ">EM GERAL</h3>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <TbSettings2 className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Configurações</p>
            </Link>
          </ul>
          <ul>
            <Link href="#" className="navBar-link group">
              <div
                className="absolute -left-8 w-[0.4rem] h-11 hidden group-hover:block bg-[var(--secondary-color)] rounded-r-md"
              >
              </div>
              <RiShieldKeyholeLine className="text-2xl group-hover:text-[var(--secondary-color)]" />
              <p className="group-hover:text-[var(--text-hover-sidebar)] group-hover:font-semibold">Segurança</p>
            </Link>
          </ul>
        </li>
        <hr className="mt-auto mb-4 border-gray-500" />
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-[var(--text-sidebar)] text-[2.5rem] shrink-0" />
          <div>
            <h4 className="font-semibold">Fandaww Punx</h4>
            <span className="text-sm text-gray-400">fandaww6@gmail.com</span>
          </div>
        </div>
      </nav >
    </div>
  )
}

export default SideBar;
