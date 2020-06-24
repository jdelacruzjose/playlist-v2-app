import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaylistItem.css";

const PlaylistItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="playlist-item__actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaylistItem;
