import React, { useState } from "react";

const Form = (props) => {
  console.log("form: ", Form);


  const [form, setForm] = useState({ 
      name: "", 
      price: "", 
      description: "", 
      location:""
    });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };


  const submitForm = (event) => {
    event.preventDefault();
    props.addNewItem(form);
    setForm({ 
    name: "", 
    price: "", 
    description: "", 
    location:""
});
    console.log("form submitted!");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Item Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        name="name"
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={form.price}
        name="price"
      />
       <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        value={form.description}
        name="description"
      />
      <label htmlFor="location">Location</label> 
      <select id="location"
          name="location"
          onChange={handleChange}>
          <option value="Bungoma">Bungoma</option>
          <option value="Eldoret">Eldoret</option>
          <option value="Garisa">Garisa</option>
          <option value="Isiolo">Isiolo</option>
          <option value="Nairobi">Nairobi</option>
        </select>
    

      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
