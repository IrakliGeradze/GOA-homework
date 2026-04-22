import { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default FormComponent;


import { useState } from "react";

function DisplayComponent() {
  const [data, setData] = useState(null);

  const loadData = () => {
    const storedData = localStorage.getItem("user");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  };
  return (
    <div>
      <h2>Display Data</h2>
      <button onClick={loadData}>Load Data</button>
      {data && (
        <div>
          {data.name && <p>Name: {data.name}</p>}
          {data.email && <p>Email: {data.email}</p>}
          {data.age && <p>Age: {data.age}</p>}
        </div>
      )}
    </div>
  );
}

export default DisplayComponent;