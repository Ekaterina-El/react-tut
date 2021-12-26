import React from "react";
import UsersItem from "./UserItem";
import PaginationItem from "./PaginationItem";
// import s from "./Users.module.css";

const Users = ({ handleChangePage, currentPage, toggleFollow, users }) => {
  const pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <PaginationItem
              key={page}
              handleChangePage={handleChangePage}
              currentPage={currentPage}
              page={page}
            />
          );
        })}
      </div>

      {users.map((user) => (
        <UsersItem 
            key={user.id}
            user={user} toggleFollow={toggleFollow} />
      ))}
    </div>
  );
};

export default Users;
