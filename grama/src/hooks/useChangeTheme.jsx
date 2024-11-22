"use client"

import themeData from '../lib/configs/themes.json';
function useChangeTheme() {
  const changeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeData.theme[theme].primary);
    root.style.setProperty('--secondary-color', themeData.theme[theme].secondary);
    root.style.setProperty('--bg-sidebar', themeData.theme[theme].sideBar.background);
    root.style.setProperty('--text-color', themeData.theme[theme].text);
    root.style.setProperty('--text-sidebar', themeData.theme[theme].sideBar.text);
    root.style.setProperty('--text-hover', themeData.theme[theme]['text-hover']);
    root.style.setProperty('--text-hover-sidebar', themeData.theme[theme].sideBar['text-hover']);
  }
  return { changeTheme }
}
export default useChangeTheme;
