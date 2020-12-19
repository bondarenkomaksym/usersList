import React from "react";
import users from '../resources/data.json';
import firsticon from '../resources/medals/1st.svg';
import secondicon from '../resources/medals/2nd.svg';
import thirdicon from '../resources/medals/3rd.svg';

const User = (props) => {
  // debugger;
  const rawSort = users.sort((a, b) => b.pageviews - a.pageviews);

  return (
    <li className="user">
      <div className="user__medal">{
        props.pageviews === rawSort[0].pageviews ? <img className="user__medal-icon" src={firsticon} />
          : props.pageviews === rawSort[1].pageviews ? <img className="user__medal-icon" src={secondicon} />
            : props.pageviews === rawSort[2].pageviews ? <img className="user__medal-icon" src={thirdicon} /> : null
      }</div>

      <div className="user__number">{props.children}</div>
      <span className="user__name-firstletter">{props.name[0]}</span>
      <span className="user__name">{props.name}</span>
      <span className="user__pub">{props.count_pub}</span>
      <span className="user__pageviews">{props.pageviews}</span>
    </li>
  );
};


export default User;