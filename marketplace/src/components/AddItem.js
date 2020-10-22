import React, { useState } from "react";
import styled from "styled-components";
import Data from "./Data";
import Form from "./Form";
import ItemCard from "./ItemCard";

function AddItem() {

  const [item, setItem] = useState(Data);
  console.log(item);

  const Wrapper = styled.div`
    text-align: center;
    font-family: tahoma;
  `;

  const addNewItem = (form) => {
    const formID = Data.length + 1; 
    console.log("Form ID: ", formID);
    const newItem = {
      id: formID,
      name: form.name,
      price: form.price,
      description: form.description,
      location: form.location
    };
    setItem([...item, newItem]);
  };

  return (
    <Wrapper>
      <ItemCard item={item} />
      <Form addNewItem={addNewItem} />
    </Wrapper>
  );
}

export default AddItem;
