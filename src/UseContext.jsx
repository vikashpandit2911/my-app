import React, { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

let UserDetailsContext=createContext(null);

export function VideoComponent(){
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-danger p-4">
            <h5>Videos Component - {context.UserName}</h5>
        </div>
    )
}

export function HomeComponent(){
    const context=useContext(UserDetailsContext);
  return(
    <div className='bg-warning p-4'>
        <h5>Home Component-{context.UserName}</h5>
        <VideoComponent/>
    </div>
  )
}



export default function UseContext() {
    const [userName, setUserName] = useState();
    function handleNameChange(e){
        setUserName(e.target.value)
    }
  return (
    <div className='container-fluid p-4 m-2 bg-dark text-white'>
             <UserDetailsContext.Provider value={{UserName:userName}}>
                <h2>Index Component</h2>
                <div className='mb-4'>
                    User Name<input type='text' onChange={handleNameChange}/>
                </div>
                <HomeComponent/>
             </UserDetailsContext.Provider>
    </div>
  )
}
