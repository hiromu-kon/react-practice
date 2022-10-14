import { ChangeEvent, useCallback, useState } from 'react'
import './App.css'
import { Count } from './components/Count';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const onClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [count])
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <input onChange={(e) => onChange(e)} />
      <button onClick={() => onClick()}></button>
      <Count count={count} onClick={onClick}  />
    </div>
  )
}
