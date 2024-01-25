import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { language } from "../../layout/details";

import { CgArrowRightR } from "react-icons/cg";
import upgrate from "../../assets/images/Empty Chat 1.svg";
import { LuPenLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export const DinamikSidebar = ({ search, create, children }) => {
  return (
    <div className="dinamik_sidebar_conatiner">
      {search && <SidebarSearch />}
      {create && <SidebarCreateChat />}
      <div className="_sidebar_contents">{children}</div>
      <div className="sidebar_upgrade_box">
        <span>
          <RxCross2 />
        </span>
        <img src={upgrate} alt="" />
        <button>
          {language().upgarde} <BsStars />
        </button>
      </div>
    </div>
  );
};

export const SidebarItem = ({
  data = null,
  data_yesterday = null,
  data_last_week = null,
  icon = null,
  action = null,
  noData = null,
}) => {
  const lang = language();
  return (
    <>
      {noData ? (
        <p>{lang.sidebar.noData}</p>
      ) : (
        <>
          {data?.map((item, ind) => (
            <Link to={item?.path} className="sidebar_content_item" key={ind}>
              <img src={icon} alt="" />
              <p>lorem ipsum test...</p>
              {action && (
                <div className="action_btn_box">
                  {action.update && (
                    <button>
                      <LuPenLine />
                    </button>
                  )}
                  {action.delete && (
                    <button>
                      <RiDeleteBinLine />
                    </button>
                  )}
                </div>
              )}
            </Link>
          ))}
          {data_yesterday && (
            <>
              <p className="sidebar_yesterday">Yesterday</p>
              {data_yesterday?.map((item, ind) => (
                <Link
                  to={item?.path}
                  className="sidebar_content_item"
                  key={ind}
                >
                  <img src={icon} alt="" />
                  <p>lorem ipsum test...</p>
                  {action && (
                    <div className="action_btn_box">
                      {action.update && (
                        <button>
                          <LuPenLine />
                        </button>
                      )}
                      {action.delete && (
                        <button>
                          <RiDeleteBinLine />
                        </button>
                      )}
                    </div>
                  )}
                </Link>
              ))}
            </>
          )}
          {data_last_week && (
            <>
              <p className="sidebar_yesterday">Last week</p>
              {data_yesterday?.map((item, ind) => (
                <Link
                  to={item?.path}
                  className="sidebar_content_item"
                  key={ind}
                >
                  <img src={icon} alt="" />
                  <p>lorem ipsum test...</p>
                  {action && (
                    <div className="action_btn_box">
                      {action.update && (
                        <button>
                          <LuPenLine />
                        </button>
                      )}
                      {action.delete && (
                        <button>
                          <RiDeleteBinLine />
                        </button>
                      )}
                    </div>
                  )}
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export const SidebarSearch = () => {
  return (
    <form className="dinamik_sidebar-search">
      <CgArrowRightR />
      <input type="search" name="search" placeholder={language().onlySearch} />
    </form>
  );
};

export const SidebarCreateChat = () => {
  const lang = language();
  return (
    <div className="dinamik_sidebar_create_chat">
      <CgArrowRightR />
      <button>
        <FaPlus />
        {lang.createChat}
      </button>
    </div>
  );
};
