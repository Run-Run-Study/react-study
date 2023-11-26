# React Component ?

> 컴포넌트란 리액트 요소 또는 다른 컴포넌트를 조합한 것이다.
> 즉, 페이지에 표시되는 일부 요소이다.

# JSX / TSX?

> Javascript / Typescript 파일 내부에 HTML 태그를 직업 삽입할 수 있는 기능이다.
> 이러한 JSX / TSX 파일은 브라우저에서 바로 인식할 수 없기 때문에 WebPack 에 의해 Javascript 코드로 변환한다.
> 이때 JSX / TSX 로 구현된 컴포넌트는 Javascript 객체로 표현되며, 이렇게 변환된 코드를 브라우저가 읽어서 실행하고 화면을 그린다.

# 가상 DOM ?

> Javascript 코드에서 바라우저의 표시 내용을 바꿔 쓸 때 `DOM` 에 접근해야 하며, 리액트의 화면 그리기 엔진에서는 먼저 `가상 DOM` 을 구현한다.
> 가상 DOM 이란 메모리에 저장된 모형화한 DOM 트리를 의미한다.

# Functional Component / Class Component

> 기존 함수형 컴포넌트는 부모로부터 props 를 받아 JSX 를 반환하기만 하는 컴포넌트였지만
> React Hooks 의 등장으로 함수 컴포넌트에서도 내부 상태나 라이브사이클을 다룰 수 있게 되면서 현재 시점에서는 함수형 컴포넌트 방식이 더욱 많이 사용된다.
>
> 클래스 컴포넌트의 문제점은 다음과 같다.
> - 콜백 함수에서 props / state 등을 참조하려면 사전에 `this` 콘텍스트를 바인딩해야 한다.
> - 라이프사이클을 다루는 메서드가 많아 복잡하다.
> - 상태가 함께 있어서 다른 컴포넌트와 공통화하기 어렵다.
>
> 함수 컴포넌트는 임의의 객체를 `props` 로서 인수를 가지며, `JSX.Element` 타입의 값을 반환하는 함수가 된다.
> 이를 통해 `props` 타입 애너테이션을 붙여 부모 컴포넌트로부터 받을 수 있는 값을 제한할 수 있다.
> 만약 children 을 가질 경우 children 의 타입은 `eact.ReactNode` 를 지정한다.

# React.VFC / React.FC

> `React.VFC` 는 암묵적으로 `children` 을 정의 했으나 React 18 이후부터 Deprecated 되었다.
> 또한, `React.FC` 에서 `children` 이 삭제되어 모든 컴포넌트는 `React.FC` 타입으로 지정하고, `children` 을 사용할 때는 `props` 타입 안에서 별도로 지정해야 한다.

> `React.FC` 가 사용되지 않는 경향이 있는데 이유는 다음과 같다.
> - `React.FC` 에서 암묵적으로 정의된 `displayName` 이나 `defaultProps` 는 최근 사용되지 않거나, 권장되지 않는다.
> - `props` 의 타입 정의에 제네릭을 사용하는 경우, `React.FC` 에 적절한 타입을 지정할 수 없다.

## React.VFC

```tsx
import {ContainerProps} from "postcss";

type ContainerProps = {
  title: string
}

// React.VoidFunctionComponent
const Container: React.VFC<ContainerProps> = (props) => {
  const {title, children} = props
}
```

## React.FC

```tsx
import {ContainerProps} from "postcss";

type ContainerProps = {
  title: string,
  // React.FC 는 children 암묵적으로 정의하지 않고 있기 때문에 필요하다면 직접 정의해줘야 한다. 
  children: React.ReactNode
}

// React.FunctionComponent
const Container: React.FC<ContainerProps> = (props) => {
  const {title, children} = props
}
```
