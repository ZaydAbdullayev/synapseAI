import React, { useState } from "react";
import "./home.css";
import { language } from "../../layout/details";
import { generateComplexColor } from "../services/color.service";
import { useNavigate, Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus, FaCode } from "react-icons/fa6";
import { SiGooglegemini } from "react-icons/si";
import avatar1 from "../../assets/images/image (1).webp";
import avatar2 from "../../assets/images/image (2).webp";
import avatar3 from "../../assets/images/image (3).webp";
import avatar4 from "../../assets/images/image.webp";
import add from "../../assets/images/add.svg";
import bg from "../../assets/images/Header image.png";

const guide_data = [
  {
    title: "Upload form in HTML CSS",
    lastModify: "2 min",
    createdChat: "5 mins",
    path: "",
    icon: <FaCode />,
  },
  {
    title: "Upload form in HTML CSS",
    lastModify: "2 min",
    createdChat: "5 mins",
    path: "",
    icon: <FaCode />,
  },
  {
    title: "Upload form in HTML CSS",
    lastModify: "2 min",
    createdChat: "5 mins",
    path: "",
    icon: <FaCode />,
  },
  {
    title: "Upload form in HTML CSS",
    lastModify: "2 min",
    createdChat: "5 mins",
    path: "",
    icon: <FaCode />,
  },
  {
    title: "Upload form in HTML CSS",
    lastModify: "2 min",
    createdChat: "5 mins",
    path: "",
    icon: <FaCode />,
  },
];

export const Home = () => {
  const lang = language();
  const [sort, setSort] = useState({ id: 0, state: false });
  const navigate = useNavigate();

  const items = [
    {
      title: lang.home.title,
      size: "56%",
    },
    {
      title: lang.home.lastModify,
      size: "15%",
    },
    {
      title: lang.home.createdChat,
      size: "15%",
    },
    {
      title: lang.home.members,
      size: "14%",
    },
  ];

  return (
    <div className="main_outlet_show">
      <div className="container home">
        <div className="home_header-bg">
          <img src={bg} alt="" />
          <figure className="home_header-icon">
            <SiGooglegemini />
          </figure>
        </div>
        <div className="home_main-informations">
          <div className="_information_header">
            <h1>Gemini AI</h1>
            <button onClick={() => navigate("gemini-ai")}>
              {lang.createChat} <FaPlus />
            </button>
          </div>
          <div className="_information_details">
            <label>
              <p>{lang.home.aiInfo}</p>
              <figure className="_ai-guide-members">
                <img src={avatar1} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar3} alt="" />
                <img src={avatar1} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar4} alt="" />
                <img src={add} alt="" />
              </figure>
              <div className="home_search-box">
                <CiSearch />
                <input type="text" placeholder={lang.search} />
              </div>
            </label>
            <label>
              <p>
                Vesion <span>1.3.4</span>
              </p>
              <p>
                Developer{" "}
                <span>
                  OpenAI <SiGooglegemini />
                </span>
              </p>
              <p>
                Extensions <span>Yes ✅</span>
              </p>
            </label>
          </div>

          <div className="home_ai-guide">
            <div className="_ai-guide-title">
              {items.map((item, index) => {
                return (
                  <label
                    key={index}
                    onClick={() => setSort({ id: index, state: !sort.state })}
                    style={{ "--ai-guide-w": item.size }}
                  >
                    <p>{item.title}</p>
                    {sort.id === index && sort.state ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </label>
                );
              })}
            </div>
            <div className="_ai-guide-body">
              {guide_data.map((item, index) => {
                return (
                  <Link to={item?.path} className="_ai-guide-item" key={index}>
                    <p style={{ "--ai-guide-item-w": "56%" }}>
                      <span
                        style={{
                          backgroundColor: generateComplexColor(),
                        }}
                      >
                        {item.icon}
                      </span>
                      {item.title}
                    </p>
                    <p style={{ "--ai-guide-item-w": "15%" }}>
                      {item.lastModify}
                    </p>
                    <p style={{ "--ai-guide-item-w": "15%" }}>
                      {item.createdChat}
                    </p>
                    <figure
                      className="_ai-guide-members"
                      style={{ "--ai-guide-item-w": "14%" }}
                    >
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </figure>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
