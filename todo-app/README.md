# Todo-App

> 리액트의 이해를 높이기 위한 클론코딩  
> 함수형 컴포넌트로 Hooks를 사용하여 만들기

## UI 컴포넌트 구성하기

1. TodoTemplate 컴포넌트 : UI의 전체적인 틀을 만드는 컴포넌트, children으로 내부 JSX를 props로 받아와서 렌더링한다.

   > - children이란 컴포넌트 태그 사이 내용을 보여주는 props이다.

2. TodoInsert 컴포넌트 : 새로운 항목을 입력하고 추가하는 컴포넌트, input의 state를 관리한다.

3. TodoList 컴포넌트 : todo 배열을 props로 받아와서 배열 함수인 map함수를 이용해 여러개의 TodoListItem 컴포넌트를 반환한다.

4. TodoListItem 컴포넌트 : 할 일에 대한 정보(state)를 렌더링하는 컴포넌트, todo 배열을 props로 받아와서 state에 따른 UI를 렌더링한다.

## 기능의 흐름

> TodoLIst에 대한 기능과 상태를 모두 최상위 컴포넌트인 App.js에서 관리한다.

- App.js에서 모든 상태를 관리하는 이유는 : todo 객체와 기능들을 하위 컴포넌트에 props로 내려주고 하위 컴포넌트는 자신이 필요한 기능과 상태만 props로 받아서 사용하면 되기 때문에

1. 최상위 컴포넌트인 App.js 에서 필요한 기능인 함수를 정의하고 props로 하위 컴포넌트에 내려준다.

2. 하위 컴포넌트는 이벤트(동작)를 설정하여 해당 이벤트(동작)가 발생했을 때 props로 받은 함수를 호출시킨다.

```
 App.js
    ↓
TodoTemplate
    ↓
TodoInsert, TodoList
                ↓
            TodoListItem
```

## 컴포넌트 성능 최적화

> **성능 최적화란** 리렌더링이 불필요할 때는 리렌더링을 방지해는것이다.
>
> 리액트 컴포넌트의 렌더링은 기본적으로 빠르기 때문에 모든 컴포넌트에 일일이 최적화 할 필요는 없다.  
> 하지만 **리스트와 관련된 컴포넌트나 보여 줄 항목이 100개 이상이며 업데이트가 자주 발생된다면** 최적화를 해야된다.

- 느려지는 원인

1. 자신이 전달 받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

### React.memo를 사용하여 컴포넌트 성능 최적화

> 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화할 수 있다.

사용법

- 컴포넌트를 감싸주기만 하면 된다.
- TodolistItem 컴포넌트의 props(todo, onRemove)가 바뀌지 않는다면 리렌더링 되지 않는다.

```
const TodoListItem = ({ todo, onRemove}) => {
    ...
}
export default React.memo(TodolistItem);
```

여기서 onRemove가 todo 참조하고 있기 때문에 todo가 업데이트 된다면 onRemove 함수는 계속 생성될 것이다. **함수가 계속 만들어지는 상황을 방지하기 위해서는 다음과 같은 방법을 사용해야된다.**

1. useState의 함수형 업데이트

- 세터함수를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의 해주는 업데이트 함수를 넣는다.
- useCallback으로 감싸져있다면 두번째 파라미터인 배열을 빈 배열로 한다.

```
setTodos(todos.filter(todo => todo.id !== id));
        ↓ // 이러한 식으로
setTodos(todos => todos.filter(todo => todo.id !== id));
```

2. useReducer 사용한다.

- 기존 코드를 많이 고쳐야되지만 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 쓸수있다.

### 불변성

> 리액트 컴포넌트에서상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야한다. 이를 불변성 유지이라고 한다.

- 전개 연산자(...)와 배열의 내장함수를 많이 이용한다.
- 전개 연산자를 이용해 객체를 복사하여 필요한 부분을 교체해주는 방식

```
const onClick = useCallback(
    id => {
         setTodos(todos.map(todo =>
         todo.id === id ? { ...todo, checked: !todo.checked } : todo),
    );
}, [todos]);
```

### useCallback을 이용하여 성능 최적화

> 컴포넌트가 리렌더링 될 때마다 이벤트 함수를 생성한다. 이 부분을 최적화 하기위해 useCallback Hook을 사용하여 **이벤트 핸들러 함수를 필요할 때만 생성한다.**

usecallback으로 감싸서 사용한다.

```
const onInsert = useCallback(() => {
... 실행될 함수
}, [업데이트를 참조하는 값]);
```

### 항목 추가 기능

> 객체를 만들어서 todo 객체에 concat메소드를 사용하여 새로운 값을 상태로 설정한다.  
> push 함수는 기존 배열 자체를 변경하지만, concat은 새로운 배열을 만들어주는 차이점이 있다.

### 항목 삭제 기능

> filter 함수를 사용하여 특정조건에 맞는 배열을 생성하여 todo 객체를 재구성한다.

### 사용한 라이브러리

1. react-icons
2. classnames
3. node-sass
