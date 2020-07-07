# 리액트의 기본 개념

## JSX

> 자바스크립트와 HTML을 조합한 확장 문법이며 HTML가 비슷하다.  
> 브라우저에서 바벨을 사용하여 자바스크립트 형태의 코드로 변환된다.

### JSX의 특징

1. 꼭 닫아야 하는 태그

- JSX는 HTML과 달리 무조건 태그를 닫아줘야된다.
- 닫지 않을 경우 **Parsing Error**가 발생한다.

2. 요소를 감싸야 된다.

- 요소가 여러개면 무조건 부모 요소 하나로 감싸야된다.  
  이유 : Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 **컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다는 규칙 때문이다.**

3. 자바스크립트 표현

- JSX 안에서 { }을 통해 자바스크립트 표현식을 사용할 수 있다.

4. class 대신 className을 사용한다.

## 컴포넌트

> UI를 구성하는 작은 덩어리이다.  
> 데이터가 주어졌을때 이에 맞추어 UI를 만들어준다.

### 컴포넌트를 선언하는 방식

1. class형 컴포넌트

- state 기능과 라이프사이클 기능을 사용할 수 있다.
- 무조건 render()를 호출해야된다.

2. 함수형 컴포넌트

- state 기능과 라이프사이클 기능을 사용이 불가능하다.
- 이 단점은 Hooks라는 기능이 도입되면서 해결되었다.
- 함수형 컴포넌트와 Hooks 사용을 권장하고 있다.

### 컴포넌트 공통 개념

> 모듈 내보내기(export)와 모듈 불러오기(import)

## props

> props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할때 사용하는 요소이며,  
> **props값은 부모 컴포넌트에서 설정할 수 있다.**  
> props값은 기본값 설정 및 값 검증이 가능하다. (https://velopert.com/921)

## state

> 리액트에는 두 가지 종류의 state가 있다. class형 컴포넌트가 지니고 있는 state와 함수형 컴포넌트에서 사용하는 useState라는 함수이다.

1. class형 컴포넌트 state

- constructor(props) 메소드를 이용한 state
- **class형 컴포넌트에서 state를 조회할때는 this.state라고 명시해야된다.**

```
class test extends Component {
    constructor(props){ // 컴포넌트의 생성자 메소드
        super(props); // constructor메소드를 사용할땐 무조건 호출해야 된다. Component 클래스가 지닌 생성자 함수를 호출해 주기 때문에
        this.state = { // state는 객체 형식.
            number : 0
        }
    }
    render() {
        const {number} = this.state // state를 조회할때는 this.state
        return (
            <div>
                <h1>{number}</h1>
                <button onCilck={() => {
                    this.setState({ number: number + 1 }); // state값을 변경할때
                }}>
                </button>
            </div>
        )
    }
}

```

- constructor없이 state 사용

```
class test extends Component {
    render() {
        state = {
            number: 0
        }
        return (
            ...
        )
    }
}
```

2. 함수형 컴포넌트 useState

- 함수형 컴포넌트는 기본적으로 상태를 가질 수 없지만 Hooks라는 기능이 도입되면서 사용 가능해졌다.
- useState함수는 배열을 반환하며 배열의 **첫번째 원소는 현재상태**이고 **두번째 원소는 상태를 바꾸어 주는 함수(세터함수)**이다.

```
const test = () => {
    const [name, setName] = useState('');
    const onClickName = () => setName('안녕하세요');

    return(
    ...
    )
}
```
