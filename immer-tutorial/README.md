# immer 라이브러리

> immer 라이브러리란 불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 라이브러리이다.

## 핵심

> immer을 사용한다고 해서 무조건 코드가 간결해지지는 않는다. immer은 불변성을 유지하는 코드가 복잡할때만 사용해도 충분하다.  
> immer을 사용하여 컴포넌트 상태를 작성할 때는 객체 안에 있는 값을 직접 수정하거나, 배열에 직접적인 변화를 일으키는 push, splice 등의 함수를 사용해도 무방하다.

## 사용법

> immer에서 제공하는 produce라는 함수를 호출하여 사용한다.

- 첫 번째 파라미터는 수정하고 싶은 상태이다.
- 두 번째 파라미터는 상태를 어떻게 업데이트할지 정의하는 함수이다. 이 두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성한다.

```
const [name, setName] = useState('');
setName(
    produce(name, draft => {
        draft[name] = "test"
    })
);
```

### 응용

- produce 함수를 호출할 때 첫 번째 파라미터가 함수형태라면 업데이트 함수를 반환한다.

```
const [name, setName] = useState('');
setName(
    produce(draft => {
        draft[name] = "test"
    })
);
```
