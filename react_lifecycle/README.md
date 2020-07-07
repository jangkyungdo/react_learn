# 리액트 라이프사이클

## 리액트 라이프사이클이란?

> 모든 리액트 컴포넌트에는 라이프사이클(생명주기)이 존재한다. 컴포넌트의 생명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여 페이지가 사라질 때 끝난다.

### 왜 사용해야되는가?

> 컴포넌트를 처음 렌더링할 때나 컴포넌트를 업데이트하기 전후 등 작업이 필요할 때가 있다.  
> 그럴때 컴포넌트 라이프 사이클 메소드를 사용하는 것이다.
>
> 라이프사이클 메소드는 class형 컴포넌트에서만 사용 가능하다.

## 라이프사이클 메소드

> **컴포넌트 상태에 변화가 있을 때마다 실행하는 메소드이다.**

---

### 라이프사이클 메소드의 종류

> 라이프사이클 메소드의 종류는 총 9가지이며, 3가지 카테고리로 나뉘어진다.  
> **Will** 접두사가 붙은 메소드는 어떤 작업을 작동하기 **전**에 실행되는 메소드이고,  
> **Did** 접두사가 붙은 메소드는 어떤 작업을 작동한 **후**에 실행되는 메소드이다.

1. 마운트
   > DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 한다.

마운트할 때 호출하는 메소드 순서

> 컴포넌트 생성  
>  ↓  
> constructor  
>  ↓  
> getDerivedStateFromProps  
>  ↓  
> render  
>  ↓  
> componentDidMount

- constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메소드
- getDerivedStateFromProps : propr에 있는 값을 state에 넣을 때 사용하는 메소드
- render : UI를 렌더링하는 메소드
- componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 **후** 호출하는 메소드

2. 업데이트
   > 아래와 같은 네 가지 경우 업데이트가 된다.

- props가 바뀔 때
- state가 바뀔 때
- 부모 컴포넌트가 리렌더링 될 때
- this.forceUpdate로 강제로 렌더링을 트리거할 때

업데이트될 때 호출하는 메소드 순서

> 업데이트를 발생  
>  ↓  
> getDerivedStateFromProps  
>  ↓  
> shouldComponentUpdate  
>  ↓  
> render  
>  ↓  
> componentDidUpdate

- getDerivedStateFromProps : 마운트 과정과 업데이트 시작 전에도 호출된다. props의 변화에 따라 state값에도 변화를 주고 싶을때 사용한다.
- shouldComponentUpdate : 컴포넌트의 리렌더링 유무를 결정하는 메소드 true,false값으로 결정한다.
- render : UI를 렌더링하는 메소드
- componentDidUpdate : 컴포넌트가 업데이트 된 **후** 호출하는 메소드

3. 언마운트
   > 마운트와 반대로 컴포넌트를 DOM에서 제거하는것을 언마운트라고 한다.

- componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 **전에** 호출하는 메소드
