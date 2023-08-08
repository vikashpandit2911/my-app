import React from 'react'
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Mui() {
    const [userName, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid">
            <h3>Bootstrap</h3>
                <div className="w-25">
                    <label className="form-label">User Name</label>
                    <div>
                        <input className="form-control" type="text" placeholder="Name in Block Letters" />
                    </div>
                    <div className="mt-2 mb-4">
                    <button className="btn btn-primary w-100">Login</button>
                    </div>
                </div>
               
            <h3 className="mt-4">MUI</h3>
            <div>
                <TextField onChange={handleNameChange} label="User Name" variant="outlined" />
            </div>
            <div className="mt-3">
                <Button color="error" variant="contained">Login</Button>
            </div>
            <h4>Hello ! {userName}</h4>
        </div>
    )
}
