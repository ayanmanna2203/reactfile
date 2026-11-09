import  { useState } from 'react'

function Counter({printCountValue}) {
    let count = 0 ; //Normal variable
    // const result =  useState(0)
    // const value = result[0];
    // const setValue = result[1];

    let [value, setValue] = useState(0)


    function increameant(){
        // count++;
        // setValue(value + 1)
        // setValue(value + 1)
        // setValue(value + 1)
        // setValue(value + 1)

        setValue((prev)=>prev+1)
        printCountValue(++value)

        // setValue((prev)=>prev+1)
        // setValue((prev)=>prev+1)

        // setValue(value++)
        // setValue(value++)
        // setValue(value++)

        
    }
     function decreament(){
        // count--;
        setValue((prev)=> prev-1)
        printCountValue(--value)


    }


  return (
    <div>
        <h1>Counter</h1>

        <button onClick={increameant}>+</button>
        <p>{value}</p>
        <button onClick={decreament}>-</button>
    </div>
  )
}

export default Counter
