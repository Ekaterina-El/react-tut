import React from 'react'
import userPhoto from "../../assets/empty_photo.jpg";
import s from './Users.module.css'

const UsersItem = ({toggleFollow, user}) => {
    return <div>
    <span>
      <div>
        <img
          className={s.userPhoto}
          src={user.photos.small || userPhoto}
          alt="ava"
        />
      </div>
      <div>
        <button onClick={() => toggleFollow(user.id)}>
          {user.isFolowed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </span>

    <span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"Country"},</div>
        <div>{"City"}</div>
      </span>
    </span>
  </div>
}

export default UsersItem