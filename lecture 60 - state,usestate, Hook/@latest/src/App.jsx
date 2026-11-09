import { useState } from "react";
import Counter from "./components/Counter"
import Navbar from "./components/navbar";
import Todos from "./components/Todos";

function App() {
  // let  value =0
  const [value , setValue] = useState(0)
  function printCountValue(val){
    // console.log(val);
     setValue(val);
  }

  return (
   <div>
    {/* <Navbar count={value}/>
      <Counter printCountValue={printCountValue}/> */}
      
      <Todos/>
   </div>
  );
}

export default App
