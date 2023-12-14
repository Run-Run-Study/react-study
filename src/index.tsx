import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  // index.html 에 있는 root 를 ID 로 가진 요소를 지정한다.
  document.getElementById('root') as HTMLElement
)
root.render(
  // 화면에 그릴 JSX 태그를 지정한다.
  // React.StrictMode ? 부적절한 코드를 감지하기 위한 헬퍼
  // 같은 내용의 로그가 연속으로 표시되는 경우 해당 코드를 주석 / 삭제 처리
  // <React.StrictMode>
  //    App 은 src/App.tsx 로부터 Import 한 것을 사용한다.
  <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
