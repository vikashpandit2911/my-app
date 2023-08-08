import React from 'react'
import { useReducer } from 'react'

let initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case"join":
        return{count:state.count+1};
        case"exit":
        return{count:state.count-1};
    }
}  

export default function UseReducer() {

    const[state,dispatch]=useReducer(reducer,initialState);

    function handleJoinClick(){
        dispatch({type:'join'});
    }
    function handleExitClick(){
        dispatch({type:'exit'});
    }

  return (
    <div className='container-fluid'>
        <h2>Youtube Live</h2>
        <div className='mb-3'>
            Live Viewers : {state.count}
        </div>
        <div className="border border-primary border-1 p-3" style={{height:'200px'}}>
                <p>...Live video..</p>
            </div>
            <div className="mt-3">
                <button onClick={handleJoinClick} className="btn btn-primary">Join</button>
                <button onClick={handleExitClick} className="btn btn-danger ms-2">Exit</button>
                </div>
    </div>
  )
}
