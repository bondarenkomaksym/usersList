import React from "react";
import users from '../resources/data.json';
import firsticon from '../resources/medals/1st.svg';
import secondicon from '../resources/medals/2nd.svg';
import thirdicon from '../resources/medals/3rd.svg';

const User = (props) => {
  // debugger;
  const rawSort = users.sort((a, b) => b.pageviews - a.pageviews);

  let colors = [
    '#F9D9FF',
    '#E6DBFF',
    '#FFDFDF',
    '#A5DBEB',
    '#EAFFEF',
    '#DBEBFF',
    '#CACAFF',
    '#F7F9D0',
    '#BDF4CB',
    '#E6CCCC',
    '#E9E9C0',
    '#C0E0DA',
    '#FFD9B7'
  ];
  let random_color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="user" >
      <div className="user__number">{props.children}</div>
      <div className="user__name-firstletter" style={{ backgroundColor: random_color }}>{props.name[0]}</div>
      <div className="user__np">
        <div className="user__name">{props.name}</div>
        <div className="user__pub">{props.count_pub} публ.</div>
      </div>

      <div className="user__medal">{
        props.pageviews === rawSort[0].pageviews ? <img className="user__medal-icon" src={firsticon} />
          : props.pageviews === rawSort[1].pageviews ? <img className="user__medal-icon" src={secondicon} />
            : props.pageviews === rawSort[2].pageviews ? <img className="user__medal-icon" src={thirdicon} /> : null
      }</div>
      <div className="user__pageviews">{props.pageviews}</div>
    </div>
  );
};


export default User;