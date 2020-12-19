import React from "react";

const User = (props) => {
  return (
    <li className="user">
      <div className="user__number">{props.children}</div>
      <span className="user__name">{props.name}</span>
      <span className="user__pub">{props.count_pub}</span>
      <span className="user__pageviews">{props.pageviews}</span>
    </li>
  );
};
export default User;