import DropDown from "@/components/DropDown";
import SearchInput from "@/components/SearchInput";
import { HiOutlineInbox } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Dashboard() {
  return (
    <div className="w-full flex text-[var(--text-color)] my-1 flex-col">
      <header className="flex gap-3 h-20 w-full items-center px-4 border-b border-[var(--border-color)]">
        <DropDown />
        <div className="flex items-center gap-2 ml-auto">
          <SearchInput />
          <div className="ml-10 flex items-center gap-2">

            <div className="relative flex items-center justify-center w-10 h-10 border border-[var(--border-color)] cursor-pointer rounded-full">
              <div className="h-2 w-2 absolute top-2 right-2 bg-[var(--bg-sidebar)] bg-green-500 rounded-full">
              </div>
              <HiOutlineInbox className="text-2xl text-[var(--text-color)]" />
            </div>

            <div className="relative flex gap-2 items-center justify-center text-[var(--text-color)] w-max h-10 px-3 border border-[var(--border-color)] cursor-pointer rounded-full">
              <span className="font-medium text-base">Add new product</span>
              <FaCirclePlus className="text-[var(--text-color)]" size={20} />
            </div>

          </div>
        </div>
      </header>
      <div className="p-4 h-full w-[75%] border-r border-[var(--border-color)]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <h1>Dashboard</h1>
              <h3 className="text-xl">An any way to manage sales with care and precision.</h3>
            </div>

            <div className="flex items-center gap-2 h-10 w-max px-3 mt-4 border border-[var(--border-color)] cursor-pointer rounded-full">
              <LuCalendarDays className="text-[var(--text-color)]" size={20} />
              <span className="font-medium text-base">January 2024 - May 2024</span>
              <MdOutlineKeyboardArrowDown className="dropdown-arrow text-2xl transition duration-300" />
            </div>
          </div>

          <div className="w-full h-max my-4 flex gap-5">
            <div
              className="w-full h-[250px] p-6 rounded-2xl"
              style={{ background: "var(--bg-sidebar)" }}
            >
              <div className="flex items-center gap-2">
                <div className="dot-alert"></div>
                <span className="text-[var(--text-sidebar)]">Update</span>
              </div>
            </div>

            <div
              className="w-full h-[250px] rounded-2xl border border-[var(--border-color)]"
            >

            </div>

            <div
              className="w-full h-[250px] rounded-2xl border border-[var(--border-color)]"
            >

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
