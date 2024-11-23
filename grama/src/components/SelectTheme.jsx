'use client'

import useChangeTheme from "@/hooks/useChangeTheme";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SelectTheme() {
  const { changeTheme } = useChangeTheme();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme);
  });

  return (
    <div className="relative px-3 h-10 w-52 bg-[var(--background)] border rounded-full">
      <select
        className="appearance-none bg-transparent outline-none absolute px-2 inset-0"
        id="theme"
        onChange={(e) => {
          changeTheme(e.target.value);
          setTheme(e.target.value);
        }}
        value={theme}
      >
        <option className="bg-[var(--background)]" value='light'>Claro</option>
        <option className="bg-[var(--background)]" value='dark'>Escuro</option>
        <option className="bg-[var(--background)]" value='primary'>Primário</option>
        <option className="bg-[var(--background)]" value='secondary'>Secundário</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <MdOutlineKeyboardArrowDown className="text-2xl" />
      </div>
    </div>
  )
}

export default SelectTheme;
