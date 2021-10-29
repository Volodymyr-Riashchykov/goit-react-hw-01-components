import PropTypes from "prop-types";

import style from "./FriendItem.module.css";


export default function FriendItem({  avatar, name, isOnline }) {
  return (
      <li className={style.item}>
            <span className={isOnline ? style.green : style.red}></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
  );
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};