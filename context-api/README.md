# Context API

> 리액트에서 전역적으로 사용할 데이터가 있을 때 사용하는 기능  
> 기존에는 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달했지만, Context API를 사용하면 단 한 번에 원하는 값과 상태를 받아와 사용할 수 있다.

## Context API 만들기

- createContext 함수
  > 새로운 Context를 만들 때는 createContext 함수를 사용하며 파라미터에는 기본상태를 지정한다.  
  > 하지만 value 즉 파라미터에 함수를 전달할 수 도 있다.

```
const TestContext = createContext({
    state: {},
    action: {}
})

```

- Consumer 컴포넌트
  > Context에 있는 값을 사용할 때 사용하는 컴포넌트

```
<TestContext.Consumer>
{value => ()}
</TestContext.Consumer>
```

- Provider 컴포넌트
  > Context에 있는 값을 변경할 때 사용하는 컴포넌트  
  > value 값을 꼭 명시해 줘야된다.

```
<TestContext.Provider value={{color: 'black'}}>
</TestContext.Provider>
```

## useContext Hook

> Consumer 대신 다른 방식으로 Context에 값을 받아 오는 방법 (함수형 컴포넌트일 경우)

```
const {state} = useContext(TestContext)
```
