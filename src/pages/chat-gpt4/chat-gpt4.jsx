import React, { useCallback, useEffect, useRef, useState } from "react";
import "./chat-gpt4.css";
import { language } from "../../layout/details";
import { datas } from "./datas";
import { DinamikSidebar, SidebarItem } from "../../components/sidebar/sidebar";
import { generateComplexColor } from "../services/color.service";

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
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

const API_KEY = process.env.REACT_APP_API_KEY;
export const ChatGpt4 = () => {
  const lang = language();
  const [header, setHeader] = useState(false);
  const [chat, setChat] = useState(false);
  const [chatHeader, setChatHeader] = useState([]);
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
  const messagesEndRef = useRef(null);

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chatMode]);

  const changeChatMode = (chat) => {
    setChatMode(chat.id);
  };

  const writingChat = (e) => {
    e.preventDefault();
    const textForm = e.target.text.value;
    setChat(true);
    const msg = {
      mesage_id: Math.random().toString(24).substr(2, 9),
      role: "user",
      content: textForm,
    };
    setChatHeader([...chatHeader, msg]);
    e.target.reset();
  };

  const sendMessage = useCallback(
    async (e) => {
      e.preventDefault();
      const textForm = e.target.text.value;
      const userMsg = {
        mesage_id: Math.random().toString(24).substr(2, 9),
        role: "user",
        content: textForm,
      };

      setChat(true);
      setChatHeader((prev) => [...prev, userMsg]);

      try {
        const { data } = await axios.post(API_URL, {
          contents: [{ parts: [{ text: textForm }] }],
        });

        const aiResponse =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response received";
        const assistantMsg = {
          mesage_id: Math.random().toString(24).substr(2, 9),
          role: "assistant",
          content: aiResponse,
        };

        setChatHeader((prev) => [...prev, assistantMsg]);
      } catch (error) {
        console.error(error);
        setChatHeader((prev) => [
          ...prev,
          {
            mesage_id: Math.random().toString(24).substr(2, 9),
            role: "assistant",
            content: "No response received",
          },
        ]);
      } finally {
        e.target.reset();
      }
    },
    [API_URL]
  );

  useEffect(() => {
    scrollToBottom();
  }, [chatHeader]);

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
              <h1>Gemini AI</h1>
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
            <div ref={messagesEndRef}></div>
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
                {chatHeader.map((chat) => {
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
                        <p style={{ lineHeight: "1.6" }}>
                          {chat.role === "user" ? (
                            chat.content
                          ) : (
                            <TypeAnimation
                              sequence={[chat.content, 9999999, ""]}
                              speed={50}
                              cursor={false}
                              omitDeletionAnimation={false}
                              style={{
                                fontSize: "1em",
                                display: "block",
                                whiteSpace: "pre-wrap",
                              }}
                            />
                          )}
                        </p>
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
                              <HiArrowPathRoundedSquare />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div ref={messagesEndRef}></div>
          </div>
        )}

        <form className="chat_main-input-box" onSubmit={sendMessage}>
          <span>
            <RiOpenaiFill />
          </span>
          <input type="text" name="text" placeholder={lang.chat_input} />
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
