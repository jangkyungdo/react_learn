import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 앞에 ?을 생략한다.
  });
  console.log(query);
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값은 true로 설정했습니다 !</p>}
    </div>
  );
};

export default About;
