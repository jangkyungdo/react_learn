# Hooks

> 함수형 컴포넌트에서 상태를 관리하기 위해 새롭게 도입한 기능이 Hooks이다.

## Hooks의 종류

### 1. useState

> 기본적인 Hook으로 상태를 가질 수 있게 한다.

- useState 함수의 파라미터에는 상태의 기본값이 들어간다.
- useState 함수는 배열을 반환하며 배열의 **첫 번째 원소는 기존 상태를 뜻하고**
- **두 번째 원소는 상태를 설정하는 함수(세터함수)** 이다.

```
const [value, setValue] = useState(0);

const onClick = () => {
    setValue(value + 1);
}
```

### 2. useEffect

> 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

- class형 컴포넌트에 **componentDidMount와 componetnDidUpdate를 합친 형태**
- 기본적으로 렌더링되고 난 직후마다 실행되며, **두 번쨰 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.**

```
useEffect(() => {
    console.log('기본적으로 실행되는 부분');
}, [value]) // value 값이 바뀔 때만 업데이트를 실행
```

### 3. useReducer

> useState보다 더 다양한 상태를 다른 값으로 업데이트 할때 사용하는 Hook

- useReducer의 **첫 번째 파라미터에는 리듀서 함수가 들어가고 두 번째 파라미터에는 해당 리듀서의 기본값이 들어간다.**
- useReducer는 state값(현재 가리키고 있는 상태)과 dispatch 함수를 받아온다.

```
const [state, dispatch] = useReducer(reducer, { value: 0, name: '' });
const {value name} = state
```

- useReducer의 가장 큰 장점으로는 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다.

```
function reducer(state,action){
    ...
}
const test = () => {
    return <button onClick={() => dispatch({ type: 'test' })}>
}
```

- useReducer를 사용하려면 리듀서에 대한 간단한 개념을 알아야된다.
- **리듀서는 현재상태와 액션값을 전달받아 새로운 상태를 반환해주는 함수이다.**

##### 액션이란?

> 상태에 변화가 생길때 액션이라는 것이 발생한다 라고 생각하면 된다. 액션은 객체로 표현된다.

- useReducer에서 액션 객체는 **반드시 type을 지니고 있을 필요가 없다.**

##### 디스패치란?

> dispatch는 액션을 발생시키는 함수이다. 더 자세하게는 리듀서 함수를 호출시켜서 액션을 발생한다.

- **dispatch() 함수를 이용해서 리듀서 함수를 호출 시킨다.**

```
dispatch(액션객체);
```

### 4. useMemo

> 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 시켜주는 Hook

- 렌더링 과정에서 불필요한 부분까지 업데이트 된다면 비효율적일 것이다. 하지만 useMemo Hook을 사용하면 이러한 작업을 효율적으로 할 수 있다.
- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 특정 값이 바뀌지 않았다면 이전 결과를 다시 사용하는 방식

### 5. useCallback

> useCallback는 useMemo와 비슷한 함수이며, 주로 렌더링 성능을 최적화해야 되는 상황에서 사용하는 Hook  
> 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.

- useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수가 들어가고, 두 번째 파라미터에는 배열이 들어간다.
- 두 번째 파라미터에 들어가는 배열에는 **어떤 값이 변했을때 함수를 생성하는지 명시 해야된다.**
- useMemo는 숫자, 문자열, 객체처럼 일반 값을 재사용할 때 사용하고, 함수를 재사용하려면 useCallback을 사용하는게 좋다.
