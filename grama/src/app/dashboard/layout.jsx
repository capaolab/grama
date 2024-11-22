'use client'

import SideBar from "@/components/SideBar";
import useChangeTheme from "@/hooks/useChangeTheme";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const { changeTheme } = useChangeTheme();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      changeTheme(theme);
    }

    setLoading(false);
  }, []);

  return (
    <main className="flex">
      {loading ? (
        <div></div>
      ) : (
        <>
          <SideBar />
          {children}
        </>
      )}
    </main>
  );
}
