import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaylistItem from "./PlaylistItem";
import "./PlaylistList.css";

const PlaylistList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No playlist found. Want to create one?</h2>
          <button>Share Playlist</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="playlist-list">
      {props.items.map((playlist) => (
        <PlaylistItem
          key={playlist.id}
          id={playlist.id}
          image={playlist.imageUrl}
          title={playlist.title}
          description={playlist.description}
          creatorId={playlist.creator}
        />
      ))}
    </ul>
  );
};

export default PlaylistList;
