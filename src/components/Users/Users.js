import React, { useEffect } from "react";
import s from "./Users.module.css";

const Users = ({ toggleFolow, users, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        fullname: "Dmitry K.",
        isFolowed: true,
        location: {
          city: "Minsk",
          country: "Belorus",
        },
        status: "I am ...",
      },

      {
        id: 2,
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        fullname: "Valera F.",
        isFolowed: false,
        location: {
          city: "Minsk",
          country: "Belorus",
        },
        status: "I am ...",
      },

      {
        id: 3,
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        fillName: "Maria T.",
        isFolowed: true,
        location: {
          city: "Moskow",
          country: "Russia",
        },
        status: "I am ...",
      },
    ]);
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img className={s.userPhoto} src={user.photoUrl} alt="ava" />
            </div>
            <div>
              <button onClick={() => toggleFolow(user.id)}>
                {user.isFolowed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </span>

          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country},</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
