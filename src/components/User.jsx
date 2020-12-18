import React from "react";

const User = ({ name, count_pub, pageviews }) => {
  return (
    <li key={pageviews} className="user">
      <span className="user__name">{name}</span>
      <span className="user__pub">{count_pub}</span>
      <span className="user__pageviews">{pageviews}</span>
    </li>
  );
};
export default User;