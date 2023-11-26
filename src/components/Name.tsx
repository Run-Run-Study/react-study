// 이름을 입력하기 위한 텍스트 박스를 반환한다.
import React from "react";

const Name = () => {
  // Input 요소의 onChange 이벤트에 대한 콜백 함수를 정의한다.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      {/* for 는 Javascript 에서 예약어이기 때문에 htmlFor 를 사용하도록 한다. */}
      <label htmlFor="name">이름</label>
      {/* class 는 Javascript 예약어이기 때문에 className 을 사용하도록 한다. */}
      <input id={"name"} className={"input-name"} type="text" onChange={onChange} />
    </div>
  )
}

export default Name