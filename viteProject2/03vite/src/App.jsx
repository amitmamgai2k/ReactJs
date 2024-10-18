
import { useState } from 'react'



function App() {
  const [color, setColor] = useState("black")


  return (
    <>
   
<div className='w-full h-screen duration-200 ' style={{backgroundColor: color}} >
<center><h1 className=' text-xl font-bold pt-10'>BackGround Changer project</h1></center>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

  <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-lg px-2 py-2'>
    <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"red"}} >Red</button>
    <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
    <button onClick={()=>setColor('violet')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
    <button onClick={()=>setColor('brown')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:"brown"}}>Brown</button>
  </div>
</div>

</div>
    
</>
    
    
  )
}

export default App
