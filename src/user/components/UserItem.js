import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount}{" "}
            {props.placeCount === 1 ? "Playlist" : "Playlists"}
          </h3>
        </div>
      </div>
    </li>
  );
};
export default UserItem;
