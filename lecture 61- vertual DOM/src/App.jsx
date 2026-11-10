import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Key from './components/Key'

function App() {
  const [count, setCount] = useState(0)
  const [changeTag, setChangeTag] = useState(false)
  return (
    <div>
      {/* <h1>{count}</h1>
      <h1>Hii</h1>
      <h2>Hello</h2>
      {
        changeTag ? (<div>
          <p>Div Tag</p>
        </div>) : (<section>
          <p>Section Tag</p>
        </section>)
      }
      <button onClick={()=> setCount((prev)=> prev+1)}>Increment</button>

      <button onClick={()=> setChangeTag((prev)=> !prev)}>changeTag</button> */}
      <Key/>
      
    </div>
  )
}
// console.log(<h1 id ='1'><p>hello</p><p>hii</p></h1>);
export default App
