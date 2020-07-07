# 리액트 이벤트 시스템

> 이벤트란 사용자가 웹 브라우저에서 DOM 요소들과 상호작용 하는 것을 말한다.

## 리액트 이벤트 사용 주의사항

1. 이벤트 이름은 카멜 표기법으로 작성해야된다.

- 즉, onclick을 onClick으로 작성해야지 error가 발생하지 않는다.

2. 함수 형태로 값을 전달한다.

- JSX에 화살표 함수로 작성해도 되고, 렌더링 부분 외부에 작성해도된다.
  - 렌더링 외부에 작성하는것이 가독성이 높다.

3. DOM 요소에만 이벤트를 설정할 수 있다.

- input, button, div 등 DOM 요소에 이벤트를 설정할 수 있지만 컴포넌트에는 이벤트를 설정할 수 없다.

## 이벤트 종류

> [리액트 매뉴얼 참고](https://reactjs.org/docs/events.html#touch-events)

# 공부를 통해 배운 지식

> 1. event 객체는 SyntheticEvent(합성 이벤트)로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
>    SyntheticEvent(합성 이벤트)는 이벤트가 끝나고 나면 이벤트가 초기화 되기 때문에 정보를 참조할 수 없다.

**주로 input 요소에 onChange 이벤트로 실시간으로 값을 바꿀때 많이 사용된다.**

> 2. class형 컴포넌트에서 JSX에 이벤트를 등록할 경우  
>    **이벤트 메소드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메소드와 this의 관계가 끊어진다.**
>
> 그렇기 때문에 이벤트 메소드를 bind(this)하거나 이벤트 메소드를 화살표 함수로 정의해야 된다.

```
constructor(props) {
  super(props);
  this.이벤트 함수명 = this.이벤트 함수명.bind(this);
}
```

```
handleClick = (e) => {
    this.setState({
        value: e.target.value
        });
}
```
