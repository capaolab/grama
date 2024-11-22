'use client'

import useChangeTheme from "@/hooks/useChangeTheme";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SelectTheme() {
  const { changeTheme } = useChangeTheme();

  return (
    <div className="relative px-2 h-14 w-40 bg-[var(--background)] rounded-md border">
      <label htmlFor="theme" className="text-sm text-[var(--text-color)]">Selecione um tema:</label>
      <select
        className="appearance-none bg-transparent outline-none absolute px-2 pt-4 inset-0"
        id="theme"
        onChange={(e) => changeTheme(e.target.value)}
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
