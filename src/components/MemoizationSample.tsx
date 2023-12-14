import { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

// Fizz 는 보통의 함수 컴포넌트
// isFizz 가 true 인 경우 Fizz 로, 이외에는 표시하지 않는다.
// isFIzz 의 변화에 관계없이, 부모가 다시 그려지면 Fizz 도 다시 그려진다.
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz 가 다시 그려졌습니다. isFizz = ${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

// Buzz 는 메모이제이션한 함수 컴포넌트
// isBuzz 가 true 면 Buzz 라고 표시하고, 이외에는 표시하지 않는다.
// 부모 컴포넌트가 다시 그려져도 isBuzz 가 변화하지 않는 한 Buzz 는 다시 그려지지 않는다.
// 메모이제이션 컴포넌트에 함수나 객체를 전달하면, 다시 부모의 화면이 그려질 때 해당 컴포넌트도 다시 그려지게 된다.
const Buzz = memo<BuzzProps>(props => {
  const { isBuzz, onClick } = props
  console.log(`Buzz 가 다시 그려졌습니다. isBuzz = ${isBuzz}`)
  return (<span onClick={onClick}>
    {isBuzz ? 'Buzz' : ''}
  </span>)
})

export const MemoizationSample = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => console.log(`Buzz 가 클릭 되었습니다. isBuzz = ${isBuzz}`)

  console.log(`Parent 가 다시 그려졌습니다. count = ${count}`)

  return (<div>
    <button onClick={() => setCount(c => c + 1)}>+1</button>
    <p>{`현재 카운트 : ${count}`}</p>
    <p>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </p>
  </div>)
}