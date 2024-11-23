import { LuSearch } from "react-icons/lu";

function SearchInput() {
  return (
    <div className="flex intems-center text-[var(--text-color)] justify-center w-96 h-10 border border-[var(--border-color)] rounded-full">
      <input type="text" placeholder="Search" className="w-full h-full max-w-xs bg-[var(--background)] outline-none appearance-none" />
      <LuSearch className="text-2xl h-full flex tems-center" />
    </div>
  )

}

export default SearchInput;
