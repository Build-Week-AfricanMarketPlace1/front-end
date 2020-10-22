import React from "react";

const Item = props => {
  return (
    <div className="item-list">
      {props.item.map(item => (
        <div className="item" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.location}</p>
          <button onClick={(event) => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Item; 