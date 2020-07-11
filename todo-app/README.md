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

### 항목 추가 기능

> 객체를 만들어서 todo 객체에 concat메소드를 사용하여 새로운 값을 상태로 설정한다.  
> push 함수는 기존 배열 자체를 변경하지만, concat은 새로운 배열을 만들어주는 차이점이 있다.

리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야한다. 이를 불변성 유지이라고 한다.

### 항목 삭제 기능

> filter 함수를 사용하여 특정조건에 맞는 배열을 생성하여 todo 객체를 재구성한다.

### useCallback을 이용하여 성능 올리기

> 컴포넌트가 리렌더링 될 때마다 이벤트 함수를 생성한다. 이 부분을 최적화 하기위해 useCallback Hook을 사용하여 **이벤트 핸들러 함수를 필요할 때만 생성한다.**

### 사용한 라이브러리

1. react-icons
2. classnames
3. node-sass
