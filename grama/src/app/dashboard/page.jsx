import DropDown from "@/components/DropDown";
import SelectTheme from "@/components/SelectTheme";

function Dashboard() {
  return (
    <div className="w-full flex text-[var(--text-color)] my-1 flex-col">
      <header className="flex h-20 w-full items-center px-4 border-b-2 border-[var(--border-color)]">
        <DropDown />
        <SelectTheme />
      </header>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;
