import React, { useState } from 'react'
import MyContext from './MyContext'

const data = [
    {
        id : "01",
        name : "john",
        password : "12345"

    }
]

const LoginContext = ({children}) => {

    
    
    const [isLogged, setIsLogged] = useState(false) 

    function checkUser(userName, password){
       if(userName === "varun" && password === "varun@123"){
            setIsLogged(true)
       }
    }

    const value = {
        isLogged
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default LoginContext