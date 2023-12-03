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
