import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { FormikDemo } from '../loginpage/login'
import Axios from '../Axios/axios'
import UseContext from '../UseContext'
import UseReducer from '../UseReducer'
import Mui from '../Mui'

export default function Homepage() {
  return (
    <div>
      <BrowserRouter>
      <nav>
      <Link to="login" className='btn btn-primary me-3'>LoginPage</Link>
      <Link to="Axios" className='btn btn-primary me-3'>Axios</Link>
      <Link to="mui" className='btn btn-danger me-3'>MUI Material</Link>
      <Link to="reducer" className='btn btn-success me-3'>UseReducer</Link>
      <Link to="usecontext" className='btn btn-danger me-3'>UseContext</Link>
      </nav>
      <Routes>
      <Route path='Axios' element={
            <div><Axios/></div>
        }></Route>

        <Route path='hlo' element={
            <div>hlo my name is vikash</div>
        }></Route>

        <Route path='reducer' element={
            <div><UseReducer/></div>
        }></Route>

        <Route path='login' element={
            <div><FormikDemo/></div>
        }></Route>

        <Route path='usecontext' element={
          <div><UseContext/></div>
        }/>

        <Route path='mui' element={
          <div><Mui/></div>
        }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
