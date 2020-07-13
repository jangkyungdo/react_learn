import React, { useRef, useState, useCallback } from "react";
import "./App.css";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
      //   {
      //   ...form,
      //   [name]: [value],
      // }
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      console.log(info);

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
        //   {
        //   ...data,
        //   array: data.array.concat(info),
        // }
      );

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
      // { ...data, array: data.array.filter((info) => info.id !== id) }
    );
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={form.username}
          name="username"
          placeholder="아이디"
          onChange={onChange}
        ></input>
        <input
          value={form.name}
          name="name"
          placeholder="이름"
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
