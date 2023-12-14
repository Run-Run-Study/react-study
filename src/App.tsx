import React from 'react'
import './App.css'
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import Page from './components/ContextSample'
import CounterUseState from './components/UseStatusSample'
import CounterUseReducer from './components/UseReducerSample'
import { MemoizationSample } from './components/MemoizationSample'

// 함수로 App 이라는 컴포넌트를 정의한다.
function App() {
  // App 컴포넌트렝서는 HTML 요소를 반환한다.
  // Component ? 화면에 표시할 내용을 구축한 하나의 단위
  // JSX ? Javascript / Typescript 내부에 HTML 태그를 직접 삽입할 수 있는 기능이다.
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <ContainerSample />
      <Page />
      <CounterUseState initialValue={0} />
      <CounterUseReducer initialValue={0} />
      <MemoizationSample />
    </div>
  )
}

// 정의한 App 을 default 로 Export 한다.
export default App
