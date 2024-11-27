import { LuSearch } from "react-icons/lu";

function SearchInput() {
  return (
    <div
      className="relative flex intems-center bg-[var(--background)]
      text-[var(--text-color)] justify-center w-96 h-10 border border-[var(--border-color)] rounded-full"
    >
      <input type="text" placeholder="Search" className="absolute inset-0 px-4 bg-transparent z-10 outline-none appearance-none" />
      <LuSearch className="text-2xl absolute right-4 ml-auto h-full flex tems-center" />
    </div>
  )

}

export default SearchInput;
