import React from "react";
import "./UserItem.css";
import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item_content">
        <div className="user-image_image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item_info">
          <h2>{props.name}</h2>
          <h3>
            {props.playlist} {props.playlist === 1 ? "Playlist" : "Playlists"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
