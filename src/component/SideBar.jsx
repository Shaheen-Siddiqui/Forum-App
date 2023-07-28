import React from "react";
import { forumData } from "../database/ForumData";

export const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="ul-case">
        <ul>
          <u>
            <li>My Forum</li>
          </u>
          <li> &#x2302; Home</li>
          <li>
            <span role="img" aria-label="a11y">
              &#128269;
            </span>
            Explore
          </li>
          <li>
            <span role="img" aria-label="a11y">
              &#128278;
            </span>
            BookMark
          </li>
          <li>
            <span role="img" aria-label="a11y">
              &#128100;
            </span>
            Profile
          </li>
        </ul>
      </div>
      <div className="user-info-case">
        <img src={forumData?.picUrl} alt="user" />
        <div className="user-img-info">
          <p>{forumData.name}</p>
          <p>@{forumData.username}</p>
        </div>
      </div>
    </div>
  );
};
