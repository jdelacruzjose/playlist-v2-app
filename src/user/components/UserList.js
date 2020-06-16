import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card.css";
import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          playlist={user.playlist}
        />
      ))}
    </ul>
  );
};

export default UserList;
