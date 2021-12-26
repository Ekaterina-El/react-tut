import axios from "axios";
import React, { useEffect } from "react";
import s from "./Users.module.css";

import userPhoto from "../../assets/empty_photo.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  handleChangePage = page => {
    this.props.setCurrentPage(page)

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    const pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {
            pages.map(page => {
              return <span 
                onClick={() => this.handleChangePage(page)}
              className={page === this.props.currentPage && s.selectedPage}>{page}</span>
            })
          }
        </div>

        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  className={s.userPhoto}
                  src={user.photos.small || userPhoto}
                  alt="ava"
                />
              </div>
              <div>
                <button onClick={() => this.props.toggleFolow(user.id)}>
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
        ))}
      </div>
    );
  }
}

export default Users;
