import React, { memo, useState } from "react";
import "./navbar.css";
import { language } from "../../layout/details";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/home tab.svg";
import analytics from "../../assets/images/icon up.svg";
import ideas from "../../assets/images/icon up.svg";
import code from "../../assets/images/code-circle-01.svg";
import profil from "../../assets/images/Avatar.svg";
import newM from "../../assets/images/new icon.svg";
import addTab from "../../assets/images/plus.svg";
import { RxCross2 } from "react-icons/rx";

export const Navbar = memo(() => {
  const user = JSON?.parse(localStorage.getItem("user")) || {};
  const lang = language();
  const navigate = useNavigate();
  const [tabsFromStorage, setTabsFromStorage] = useState(() => {
    const storedTabs = JSON.parse(sessionStorage.getItem("tabs"));
    return storedTabs || tab_data;
  });

  const removeTab = (id) => {
    const newTabs = tabsFromStorage.filter((item) => item.id !== id);
    setTabsFromStorage(newTabs);
    sessionStorage.setItem("tabs", JSON.stringify(newTabs));
  };

  const addNewTab = () => {
    const newTab = {
      id: "43fe",
      title: "Website analytics",
      icon: analytics,
    };
    const newTabs = [...tabsFromStorage, newTab];
    setTabsFromStorage(newTabs);
    sessionStorage.setItem("tabs", JSON.stringify(newTabs));
  };

  return (
    <div className="navbar_container">
      <figure className="navbar_left-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </figure>
      <div className="navbar_navigation-tabs">
        {tabsFromStorage?.map((item) => (
          <figure key={item.id}>
            <img src={item.icon} alt="." />
            <figcaption>{item.title}</figcaption>
            <span onClick={() => removeTab(item.id)}>
              <RxCross2 />
            </span>
          </figure>
        ))}
        <figure onClick={() => addNewTab()}>
          <img src={addTab} alt="" />
        </figure>
      </div>
      {user?.name ? (
        <figure className="profil_box">
          <img src={profil} alt="" />
          <img src={newM} alt="" />
        </figure>
      ) : (
        <button className="authenticate_btn">{lang.layout.loginBtn}</button>
      )}
    </div>
  );
});

const tab_data = [
  {
    id: "43fe",
    title: "Website analytics",
    icon: analytics,
  },
  {
    id: "4g5e",
    title: "Enhancing Communication",
    icon: code,
  },
  {
    id: "gg53",
    title: "New ideas",
    icon: ideas,
  },
];
