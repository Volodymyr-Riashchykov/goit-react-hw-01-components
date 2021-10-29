import PropTypes from "prop-types";
import FriendItem from "../item/FriendItem";
import style from "./Friend.module.css";


export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};
