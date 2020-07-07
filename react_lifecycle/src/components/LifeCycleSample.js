import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받은 값(nextProps)을 state(prevState)에 동기화 하는 용도이다.
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      // 조건에 따른 특정 값 동기화
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    // 주로 네트워크 요청이나 setInterval, setTimeout, 비동기작업을 처리한다.
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 리렌더링 여부를 결정하는 메소드
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; // number 나머지에 4가 들어가면 false
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log(prevProps);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
