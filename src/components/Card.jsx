import React from "react";

const Card = (props) => {
  return (
    <div className={`card ` + props.className}>
      <div className="card-owner">
        <img src={props.img} alt={props.name} className="card-owner-img" />
        <div className="info">
          <p className="name">{props.name}</p>
          <p className="verification">Verified Graduate</p>
        </div>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-desc">{props.desc}</p>
    </div>
  );
};

export default Card;
