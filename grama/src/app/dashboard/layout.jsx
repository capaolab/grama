import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}
