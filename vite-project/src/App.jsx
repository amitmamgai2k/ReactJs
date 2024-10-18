import { useState } from "react"

function App() {
  let [counter,setCounter] = useState(5)
   //let counter =5
   const addValue = ()=>{
    if (counter <20 && counter >=0){
     counter = counter +1
     setCounter(counter)
   }
   else{
    counter = counter
    setCounter(counter)
   }
  }
   const removeValue = ()=>{
    if(counter<=0){
    counter = counter
    setCounter(counter)
   }
   else{
    counter = counter-1
    setCounter(counter)
   }
  }
  return (
    <>
   <h1>Hello My Name is Amit Mamgai</h1>
   <h2>Counter Value:{counter}</h2>
   <button onClick={addValue}>Add Value</button><br></br>
   <button onClick={removeValue}>remove value</button>
   
   </>
  )
}

export default App
