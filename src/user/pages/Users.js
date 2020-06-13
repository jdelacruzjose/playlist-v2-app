import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jose De la Cruz",
      image:
        "https://i.pinimg.com/originals/ce/8c/b5/ce8cb55513e3f2f9c208fffc71da5a3d.png",
      playlist: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
