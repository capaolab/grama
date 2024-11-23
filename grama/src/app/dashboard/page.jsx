import DropDown from "@/components/DropDown";
import SearchInput from "@/components/SearchInput";

function Dashboard() {
  return (
    <div className="w-full flex text-[var(--text-color)] my-1 flex-col">
      <header className="flex gap-3 h-20 w-full items-center px-4 border-b border-[var(--border-color)]">
        <DropDown />
        <SearchInput />
      </header>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;
