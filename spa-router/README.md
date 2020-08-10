# SPA (Single Page Application)

> SPA란 한개의 페이지로 이루어진 애플리케이션이다.

## SPA의 배경

> 기존에는 페이지에 어떠한 변화가 생겼을 때마다 새로운 html을 받아와서 브라우저가 해석한 후 화면에 보여주었으며, 바뀌지 않는 부분까지 새로 받아오는 불필요한 로딩이 있어서 비효율적이였다.

> 그래서 리액트 같은 라이브러리 혹은 프레임워크를 사용하여 **뷰 렌더링을 사용자의 브라우저가 담당하도록 하고** 필요한 부분만 자바스크립트를 사용하여 업데이트 해주었다.

### 싱글 페이지라고 화면이 한 종류는 아니다.

SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류지만, 해당 페이지에서 로딩된 자바스크립트와 사용자 브라우저의 주소 상태에 따라 다른 화면을 보여준다.

### SPA 단점

> 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트를 불러오기 때문에 앱의 규모가 커질수록 자바스크립트 파일이 커진다.

## 라우팅

> 라우팅이란 다른 주소에 다른 화면을 보여주는 것을 라우팅이라고 한다.
>
> 리액트 라이브러리 자체에 이 기능이 내장되어 있지 않기 때문에 라이브러리를 사용하여 구현한다.

리액트 라우터 라이브러리 종류 : 리액트 라우터, Next.js, 리치 라우터가 있다.

### react-router-dom 라이브러리

> 라우팅 라이브러리 중 가장 많이 사용하는 라이브러리이다.

프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에 react-router-dom에 내장되어 있는
BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다.

```
<BrowserRouter>
    <App />
</BrowserRouter>
```

BrowserRouter 컴포넌트는 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경할 수 있다.

### react-router-dom 주요 컴포넌트

1. Route
   > 사용자의 현재 경로에 따라 다른 컴포넌트를 보여준다.  
   > exact={true} 속성을 이용하여 경로 규칙이 겹치는 것을 방지할 수 있다. true는 생략가능  
   > path props를 배열로 설정하면 여러 경로에서 같은 컴포넌트를 보여줄 수 있다.

```
<Route path="주소규칙" component={보여 줄 컴포넌트} />
<Route path="/" component={Home} />
<Route path={['/','/about']} component={Home} />
```

2. Link
   > 클릭하면 다른 주소로 이동시켜 주는 컴포넌트이다. (새로고침이 없는 a태그)  
   > 컴포넌트 자체는 a채그로 이루어져 있지만 페이지 전환을 방지하는 기능이 내장되어 있다.

```
<Link to="/" />
<Link to="/about" />
```

3. NavLink
   > Link와 비슷한 컴포넌트  
   > 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 **특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트**이다.

```
const style ={
    display: 'flex',
    color: 'black',
    background: 'white'
}
<NavLink style={style} to="/about" />
```

4. Switch
   > 여러 Route를 감싸서 그 중 일치하는 단 하나의 라우트만을 렌더링 시켜준다.

```
<Switch>
<Route path="/" component={Home} />
<Route path="/about" component={About}} />
<Route path={['/','/about']} component={Home} />
</Switch>
```

### 페이지 주소를 유동적인 값으로 전달할 경우

1. URL 파라미터
   > URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아오는 match라는 객체 안의 params 값을 참조한다.  
   > match라는 객체 안에는 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있다.

```
/Home/menu
```

2. URL 쿼리
   > URL 쿼리를 사용할때는 location 객체에 들어있는 search값을 참조한다.  
   > location.search 값은 **문자열 형태**로 되어 있기 때문에 객체 형태로 변환해야 된다. (qs 라이브러리 사용)
