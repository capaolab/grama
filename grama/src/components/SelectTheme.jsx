'use client'

import useChangeTheme from "@/hooks/useChangeTheme";

function SelectTheme() {
  const { changeTheme } = useChangeTheme();

  return (
    <div>
      <label htmlFor="theme">Selecione um tema:</label>
      <select
        id="theme"
        onChange={(e) => changeTheme(e.target.value)}
      >
        <option value='light'>Claro</option>
        <option value='dark'>escuro</option>
        <option value='primary'>Primário</option>
        <option value='secondary'>Secundário</option>
      </select>
    </div>
  )
}

export default SelectTheme;
