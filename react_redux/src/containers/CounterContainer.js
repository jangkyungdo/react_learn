import React from 'react';

import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 일반적인 connect 방법 및 bindActionCreators 사용
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 익명함수형태, 두번째 파라미터를 객체형태로하면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해준다.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  { increase, decrease },
)(CounterContainer);
