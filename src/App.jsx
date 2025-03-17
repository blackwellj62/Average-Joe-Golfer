import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Components/Auth/login.jsx'
import { Register } from './Components/Auth/Register.jsx'
import { Authorized } from './Views/Authorized.jsx'
import { ApplicationViews } from './Views/ApplicationViews.jsx'

export const App = () => {
    return(
        <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={
        <Authorized>
          <ApplicationViews/>
        </Authorized>
      }/>
    </Routes>
    )
}
