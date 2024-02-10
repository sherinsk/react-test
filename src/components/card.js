import React from 'react';
import './Card.css'; // Import your CSS file for styling

const CardComponent = ({props}) => {
  return (
    <div className="card">
      <div className="card-container">
        <img className="card-image" src={props.imageUrl}/>
        <div className="card-text">
          <div className="name">{props.name}</div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </div>
  )
};

export default CardComponent;
