"use client"

import themeData from '../config/themes.json';

function useChangeTheme() {
  const changeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeData.theme[theme].primary);
    root.style.setProperty('--secondary-color', themeData.theme[theme].secondary);
    root.style.setProperty('--secondary-color', themeData.theme[theme].secondary);
    root.style.setProperty('--background', themeData.theme[theme].background);
    root.style.setProperty('--bg-hover', themeData.theme[theme]['bg-hover']);
    root.style.setProperty('--text-color', themeData.theme[theme].text);
    root.style.setProperty('--text-hover', themeData.theme[theme]['text-hover']);
    root.style.setProperty('--border-color', themeData.theme[theme]['border-color']);
    root.style.setProperty('--shadow-color', themeData.theme[theme]['shadow-color']);

    // SideBar
    root.style.setProperty('--bg-sidebar', themeData.theme[theme].sideBar.background);
    root.style.setProperty('--text-sidebar', themeData.theme[theme].sideBar.text);
    root.style.setProperty('--text-hover-sidebar', themeData.theme[theme].sideBar['text-hover']);
    root.style.setProperty('--shadow-color-sidebar', themeData.theme[theme].sideBar['shadow-color']);
  }
  return { changeTheme }
}
export default useChangeTheme;
