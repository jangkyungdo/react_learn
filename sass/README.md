# Sass

## Sass란

> Sass(Syntactically Awesome Style Sheets)는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있게 해주며, 재활용성 및 가독성을 높여 유지보수를 쉽게 할 수 있게 도와준다.

- create-react-app v2에서는 별도의 추가 설정없이 사용 가능하다. ( 구버전은 설정이 필요 )
- Sass에서는 두 가지 확장자를 지원한다.

1. .scss
2. .sass
   > 차이점 : .sass에서는 중괄호({})와 세미콜론(;)을 사용하지 않고 .scss에서는 사용한다.  
   > 즉, .scss의 문법이 기존 CSS 작성 방식과 비슷하다.

### 사용방법

1. node_sass 모듈을 설치한다.
   > 이 라이브러리는 sass를 CSS로 변환시켜준다.

```
npm install node_sass
yarn add node_sass
```

## 특징

2. 변수 사용

   > \$를 사용하여 변수를 설정할 수 있다.
   > 선언한 Selector(선택자)에서만 접근 가능하다.

3. Nesting(중첩)
   > 매우 중요한 개념으로 선언을 중첩시킬 수 있다.  
   > 이러한 방식은 가독성 및 유지보수에 효과적이다.

```
.container {
    width: 100%;
    h1 {
        color: red;
    }
}
```

> 부모 Selector(선택자)를 참조할땐 **&** 문자를 사용한다.

```
.container {
    width: 100%;
    h1 {
        color: red;
    }
    &:hover {
        width: 50%
    }
}
```

4. @import(불러오기)

   > **@** 문자를 import에 붙여 다른 파일을 불러오는 기능을 사용할 수 있다.

5. Mixin(믹스인)
   > 재사용되는 스타일 블록을 함수처럼 사용하는 기능이다.

- mixin을 선언하는 방법

```
@mixin test ($color, $size) {
    $calculated: 32px * $size
  color: $color;
  width: $calculated;
  height: $calculated;
}
```

- mixin을 사용하는 방법

```
@include test(blue, 1);
```
