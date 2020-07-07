import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ name, nickname });
  //   });

  //   useEffect(() => {
  //     console.log("마운트될 때만 실행됩니다.");
  //   }, []);

  //   특정 값이 업데이트될 때만 실행
  useEffect(() => {
    console.log(name);
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
      <input value={nickname} onChange={onChangeNickname}></input>
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

export default UseEffect;
