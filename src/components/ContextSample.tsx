import React from "react";

// Title 컴포넌트를 전역으로 전달하기 위해 Context 를 정의한다.
const TitleContext = React.createContext('')

const Title = () => {
  // Consumer 를 사용해, Context 값을 참조한다.
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* Header 에서 Title 로는 아무런 데이터를 전달하지 않는다. */}
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  // Provider 를 이용해 Context 에 값을 설정한다.
  // Provider 이하의 컴포넌트로부터 값을 참조할 수 있다.
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page