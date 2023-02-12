import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Signup from './Components/Signup'
import { createContext, useState } from 'react';

export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState([]);
  return (
    <UserContext.Provider  value={[loggedInUser,setLoggedInUser]}>
    
      <div  className='d-flex align-items-senter justify-content-center'
       style={{minHeight:'100vh',}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Routes>
     
      <Route path='/' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
       
    </div> 
    

    </UserContext.Provider>
    
  );
}

export default App;
