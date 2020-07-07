import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UseReducer_2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseReducer_2;
