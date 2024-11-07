import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

function SideBar() {
    return (
        <nav className="min-h-[40rem] max-h-screen w-72 p-10 bg-green-950 rounded-l-2xl">
            <Link href='#' className="flex items-center gap-2">
                <FaStarOfLife className="text-2xl text-primary"/>
                <h4 className="font-semibold text-2xl">Grama</h4>
            </Link>
            <span className="block mt-5">MENU</span>
            <li className="list-none mt-3">
                <ul className="flex items-center gap-2">
                    <RiDashboardFill className="text-2xl" /> 
                    Visão Geral
                </ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </li>
        </nav>
    )
}

export default SideBar;