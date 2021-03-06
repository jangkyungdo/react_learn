import React, { useState, Fragment } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "눈",
    },
    {
      id: 3,
      text: "바람",
    },
    {
      id: 4,
      text: "얼음",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => setInputText(e.target.value);

  const handleClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    console.log(names);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <Fragment>
      <input value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>추가</button>
      <ul>{nameList}</ul>
    </Fragment>
  );
};

export default IterationSample;
