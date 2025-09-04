import React, { useContext, useState } from 'react'
import MyContext from '../context/MyContext'

const Loginpage = () => {
    
const [text,setText] = useState("")
const [num,setNum]= useState(null)
const{checkUser, isLogged} = useContext(MyContext)

  function checklogin(){
    if(text===""|| num===''){
      alert("please fill all the details")
      
    }
    console.log(text)
    console.log(num)
    checkUser(text, num)
  }


  return (
    <div >

      {
        isLogged ? <div>
          user Dashboard
        </div>
        : 

        <div>
        <input type="text" placeholder='search' onChange={(e)=> setText(e.target.value)} /> 
        <input type='password' placeholder='password'  onChange={(e)=> setNum(e.target.value)} />

        <button onClick={()=>{
          checklogin()
        }} >login</button>
      </div>

      }

      
          
    </div>
  )
}

export default Loginpage
