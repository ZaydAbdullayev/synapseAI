import React, { useEffect, useState } from "react";
import "./chat-gpt4.css";
import { language } from "../../layout/details";
import { datas } from "./datas";
import { DinamikSidebar, SidebarItem } from "../../components/sidebar/sidebar";
import { generateComplexColor } from "../services/color.service";
import { chats } from "./datas";

import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiOpenaiFill, RiMic2Line, RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdCopyAll } from "react-icons/md";
import { PiShareFatFill } from "react-icons/pi";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import cube from "../../assets/images/action cube icon.svg";
import bg from "../../assets/images/Header image (2).png";
import user from "../../assets/images/Avatar.svg";

export const ChatGpt4 = () => {
  const lang = language();
  const [header, setHeader] = useState(false);
  const [chat, setChat] = useState(false);
  const [chatHeader, setChatHeader] = useState(chats);
  const [changeAction, setChangeAction] = useState(false);
  const [tabsFromStorage, setTabsFromStorage] = useState(() => {
    const storedTabs = JSON.parse(sessionStorage.getItem("tabs"));
    return storedTabs;
  });
  const sections = [
    {
      id: 1,
      title: lang.gpt4.main,
      state: true,
    },
    {
      id: 2,
      title: lang.gpt4.business,
      state: false,
    },
    {
      id: 3,
      title: lang.gpt4.education,
      state: false,
    },
    {
      id: 4,
      title: lang.gpt4.social,
      state: false,
    },
    {
      id: 5,
      title: lang.gpt4.dallE,
      state: false,
    },
  ];
  const [chatMode, setChatMode] = useState(sections[0].id);
  const fakeData = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chatMode]);

  const changeChatMode = (chat) => {
    setChatMode(chat.id);
  };

  // const addNewChat = (chat) => {
  //   const newChat = {
  //     ...chat,
  //     chat_id: Math.random().toString(24).substr(2, 9),
  //     message: [],
  //   };
  //   const newTabs = [...tabsFromStorage, newChat];
  //   setTabsFromStorage(newTabs);
  //   sessionStorage.setItem("tabs", JSON.stringify(newTabs));
  // };

  const writingChat = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setChat(true);
      setChatHeader([
        ...chatHeader,
        {
          bot_id: "17dced09-ed3a-474f-b750-9cfac6acf5fe",
          role: "user",
          content: e.target.value,
        },
      ]);
      e.target.value = "";
    }
  };

  const addNewChat = (chat) => {
    setChat(true);
    setHeader(chat);
  };

  const options = datas?.filter((option) => option.concerning === chatMode);
  return (
    <div className="main_outlet_show">
      <div className="container chat_conatiner">
        <div className="home_header-bg chat_header">
          <img src={bg} alt="" />
        </div>

        {!chat ? (
          <div className="chat_body_box">
            <div className="chat_body_title">
              <h1>Chat GPT-4</h1>
              <p>{lang.gpt4.description}</p>
            </div>
            <div className="change_chat-mode">
              <p>{lang.gpt4.selectMode}:</p>
              <div className="_mode-sections">
                {sections.map((section, ind) => (
                  <span
                    className={chatMode === section.id ? "active" : ""}
                    key={ind}
                    onClick={() => changeChatMode(section)}
                  >
                    {section.title}
                  </span>
                ))}
              </div>
              <div className="_mode-options">
                {options.map((option) => (
                  <div
                    className="_mode-option"
                    onClick={() => addNewChat(option)}
                  >
                    <span style={{ background: generateComplexColor() }}>
                      {option.icon}
                    </span>
                    <p>{option.name}</p>
                    <i>
                      <HiOutlineArrowRight />
                    </i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="chat_body_box">
            <div className="change_action">
              <div className="selected_chat-mode">
                <span>
                  {changeAction ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
                <p>{header?.name}</p>
                <span>
                  <RiDeleteBinLine />
                </span>
              </div>
              <div className="chat_view_box">
                {chats.map((chat) => {
                  return (
                    <div className="_chat-item">
                      <figure className="sender">
                        {chat.role === "user" ? (
                          <img src={user} alt="" />
                        ) : (
                          <span>
                            <RiOpenaiFill />
                          </span>
                        )}
                      </figure>
                      <div className="chat_message">
                        <p>{chat.content}</p>
                        {chat.role === "assistant" && (
                          <div className="chat_action-box">
                            <div className="_action-left">
                              <span>
                                <BiSolidLike />
                              </span>
                              <span>
                                <BiSolidDislike />
                              </span>
                              <span>
                                <PiShareFatFill />
                              </span>
                              <span>
                                <MdCopyAll />
                              </span>
                            </div>
                            <span>
                              <RiDeleteBinLine />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <form className="chat_main-input-box" onSubmit={writingChat}>
          <span>
            <RiOpenaiFill />
          </span>
          <input type="text" placeholder={lang.chat_input} />
          <div>
            <AiOutlinePlusCircle />
          </div>
          <div>
            <RiMic2Line />
          </div>
        </form>
      </div>
      <DinamikSidebar search={true}>
        <SidebarItem data={fakeData} icon={cube} action={false} />
      </DinamikSidebar>
    </div>
  );
};
