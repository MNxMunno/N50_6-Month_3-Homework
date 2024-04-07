import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Form = () => {
  const [name, setName] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter your text");
    let user = {
      name,
    };
    setData([...data, user]);
    setName("");
  };
  let users = data?.map((u, inx) => (
    <div key={inx} className="table">
      <h4>{u.name}</h4>
      <button>
        <RiDeleteBin5Line />
      </button>
    </div>
  ));
  return (
    <>
      <div className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="text"
            id="text"
            placeholder="Enter your text"
          />
          <button>Add</button>
        </form>
        <div className="table__cards">
          {users}
          <div className="table">
            <h4>I will wake up at 8 in morning</h4>
            <button>
              <RiDeleteBin5Line />
            </button>
          </div>
          <div className="table">
            <h4>I will practice html for 1 hour</h4>
            <button>
              <RiDeleteBin5Line />
            </button>
          </div>
          <div className="table">
            <h4>I will give time for 2 hours css</h4>
            <button>
              <RiDeleteBin5Line />
            </button>
          </div>
          <div className="table">
            <h4>Then I will have breakfast</h4>
            <button>
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
