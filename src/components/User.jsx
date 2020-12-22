import React from "react";
import users from '../resources/data.json';
import firsticon from '../resources/medals/1st.svg';
import secondicon from '../resources/medals/2nd.svg';
import thirdicon from '../resources/medals/3rd.svg';

const User = (props) => {
  const rawSort = users.sort((a, b) => b.pageviews - a.pageviews);

  let res = String(props.pageviews).split(/(?=(?:\d{3})+(?!\d))/).join(" ");

  let colors = [
    '#CB59E8',
    '#4A9586',
    '#B96F6F',
    '#C06A45',
    '#BABA21',
    '#59955C',
    '#6A6AFF',
    '#2F74D0',
    '#BC2EBC',
    '#9669FE',
    '#8C8CFF',
    '#5EAE9E',
    '#80B584'
  ];
  let random_color = colors[Math.floor(Math.random() * colors.length)];

  let pub_color = props.count_pub === 0 ? {
    color: "grey",
    opacity: 0.3
  } : null;

  return (
    <div className="user" >
      <div className="user__number">{props.children}</div>
      <div className="user__name-firstletter" style={{ backgroundColor: random_color }}>{props.name[0]}</div>
      <div className="user__np">
        <div className="user__name">{props.name}</div>
        <div className="user__pub" style={pub_color}>{props.count_pub} публ.</div>
      </div>

      <div className="user__medal">{
        props.pageviews === rawSort[0].pageviews ? <img className="user__medal-icon" src={firsticon} />
          : props.pageviews === rawSort[1].pageviews ? <img className="user__medal-icon" src={secondicon} />
            : props.pageviews === rawSort[2].pageviews ? <img className="user__medal-icon" src={thirdicon} /> : null
      }</div>
      <div className="user__pageviews">{res}</div>
    </div>
  );
};


export default User;