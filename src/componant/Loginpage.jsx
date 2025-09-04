import React, { useState } from 'react'

const Loginpage = () => {
let name='dice '
const [text,setText] = useState("")
const [num,setNum]= useState("")
  function checklogin(){
    if(text===""|| num===''){
      alert("please fill all the details")
      
    }
    console.log(text)
    console.log(num)
   // checkUser()
  }


  return (
    <div>
  <input type="text" placeholder='search' onChange={(e)=> setText(e.target.value)} /> 
  <input type="number" placeholder='password'  onChange={(e)=> setNum(e.target.value)} />


  <button onClick={()=>{
    checklogin()
  }} >login</button>    
    </div>
  )
}

export default Loginpage
