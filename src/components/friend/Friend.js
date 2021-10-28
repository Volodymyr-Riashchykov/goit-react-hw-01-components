import PropTypes from "prop-types";

import style from "./Friend.module.css";


export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={style.item} key={id}>
            <span className={isOnline ? style.green : style.red}></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }).isRequired
        ).isRequired,
    
    
    
};
