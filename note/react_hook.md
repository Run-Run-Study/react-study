# React Hook ?

> 훅(Hook) 을 통해 함수 컴포넌트 안의 상태나 라이프사이클을 다루기 위한 기능이다.

## useState

```tsx
import {useState} from "react";

type PropsType = {
  initialValue: number
}

const Component = (props: PropsType) => {
  const {initialValue} = props
  const {state, setState} = useState(initialValue)
...
}
```

> `useState` 는 상태를 다루기 위한 훅이다.
> 해당 훅으로 새로운 상태를 작성하고, 첫 번째 인수에 전달한 값이 초기 상태로 초기화된다.
> `useState` 의 반환값은 배열이며, 첫 번째에 현재 상태를 유지할 변수, 두 번째에 업데이트할 함수를 입력한다.

## useReducer

```tsx
import {useReducer} from "react";

const reducer = (currentState, action) => {
  return nextState
}

const [currentState, dispatch] = useReducer(reducer, {initState})
```

> 상태를 관리하기 위한 또 하나의 훅.
> `useReducer` 를 사용하면 배열이나 객체 등의 데이터를 모은 것을 상태로 다룰 수 있어 복잡한 상태 전이를 간단하게 기술 할 수 있다.
> `dispatch` 함수를 사용해 `action` 을 트리거하기 때문에 `useState` 에 비해
> 상태 업데이트를 호출하는 방법은 구체적인 상태에 의존하지 않아 코드를 간단하게 유지할 수 있다는 장점이 있다.
> 또한, 상태 업데이트 로직을 컴포넌트 밖의 함수로 추출하기 때문에 테스트도 쉬워진다.
