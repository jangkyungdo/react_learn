import React, { Component, useState } from "react";

const Eventpractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    let nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    onChange();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setForm({ username: "", message: "" });
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button type="button" onClick={onClick}>
        버튼
      </button>
    </div>
  );
};

export default Eventpractice;
