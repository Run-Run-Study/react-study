const Hello = () => {
  const onClick = () => {
    alert("Hello Click Event")
  }

  const text = "Hello, React"

  // text 를 자식으로 갖는 div 요소를 반환한다.
  return (
    // div 의 onClick 에 클릭 시의 콜백 함수를 반환한다.
    <div onClick={onClick}>
      {text}
    </div>
  )
}

// 외부로부터 Hello 를 읽을 수 있도록 Export 한다.
export default Hello