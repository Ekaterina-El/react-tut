import React from "react";
import UsersItem from "./UserItem";
import PaginationItem from "./PaginationItem";
// import s from "./Users.module.css";

const Users = ({
  handleChangePage,
  currentPage,
  toggleFollow,
  users,
  followingInProgress,
}) => {
  debugger
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
          inFollowing={followingInProgress.includes(user.id)}
          key={user.id}
          user={user}
          toggleFollow={() => toggleFollow(user.followed, user.id)}
        />
      ))}
    </div>
  );
};

export default Users;
