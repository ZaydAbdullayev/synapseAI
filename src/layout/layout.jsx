import React, { useState } from "react";
import "./layout.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, ligthMode, navigations } from "./details";
import { Navbar } from "../components/navbar/navbar";
import { language } from "./details";
import { acMode } from "../context/mode";

import darkIcon from "../assets/images/dark mode icon.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const Layout = () => {
  const selectedlang = JSON.parse(localStorage.getItem("language")) || "en";
  const dark = useSelector((state) => state.dark);
  const [long, setLong] = useState(false);
  const [changeLang, setChangeLang] = useState(selectedlang);
  const [changeAction, setChangeAction] = useState(false);
  const lang = language();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const updateLang = (value) => {
    setChangeLang(value);
    localStorage.setItem("language", JSON.stringify(value));
    window.location.reload();
  };

  const changeMode = () => {
    dispatch(acMode(dark === "dark" ? "light" : "dark"));
    localStorage.setItem(
      "mode",
      JSON.stringify(dark === "dark" ? "light" : "dark")
    );
  };

  return (
    <div
      className="layout_container"
      style={dark === "dark" ? { ...darkMode } : { ...ligthMode }}
    >
      {/* ================= navigation section ================= */}
      <div className={long ? "navigation_box long" : "navigation_box"}>
        <button className="navigation_menu" onClick={() => setLong(!long)}>
          <span></span>
          <span></span>
        </button>
        <div className="navigation_box-body">
          {navigations.map((nav) => (
            <NavLink to={nav.path} key={nav.id} className="nav_item">
              <img src={nav.icon} alt="" />
              <p>{nav.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="change_theme">
          <label className={changeAction ? "language action" : "language"}>
            <p onClick={() => setChangeAction(!changeAction)}>
              {changeLang}
              <span>
                {changeAction ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </p>
            <ul>
              <li
                onClick={() => updateLang("en")}
                className={changeLang === "en" ? "active" : ""}
              >
                en
              </li>
              <li
                onClick={() => updateLang("ru")}
                className={changeLang === "ru" ? "active" : ""}
              >
                ru
              </li>
            </ul>
          </label>
          <figure className="theme-item" onClick={() => changeMode()}>
            {dark === "dark" ? <MdLightMode /> : <MdDarkMode />}
            <figcaption>{lang.layout.darkMode}</figcaption>
          </figure>
        </div>
      </div>

      {/* ================= main section ================= */}
      <div className="main_conatiner">
        {/* ================= dinamik navbar section ================= */}
        <Navbar />

        {/* ================= dinamik main section ================= */}
        <div className={"main_conatiner-body"}>
          <Outlet />
        </div>

        {/* ================= dinamik sidebar section =================
        <div
          className={location === "/" ? "sidebar_box hide" : "sidebar_box"}
        ></div> */}
      </div>
    </div>
  );
};
