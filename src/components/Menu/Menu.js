import React from "react";
import style from "./Menu.module.css";
import { FaCog } from "react-icons/fa"; //ustawienia
import { MdAnnouncement } from "react-icons/md"; //nota prawna
import { GoInfo } from "react-icons/go"; //o nas

const Menu = () => {
  return (
    <div className={style.menuBlock}>
      <ul>
        <li className={style.listItem}>
          <FaCog className={style.icon} />
          Ustawienia
        </li>
        <li className={style.listItem}>
          <MdAnnouncement className={style.icon} />
          Nota prawna
        </li>
        <li className={style.listItem}>
          <GoInfo className={style.icon} />O nas
        </li>
      </ul>
    </div>
  );
};

export default Menu;