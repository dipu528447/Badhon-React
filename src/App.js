import './App.css';
import Login from './component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import NewAccount from './component/NewUser/NewAccount';
import firebaseConfig from './firebase.Config';
import { initializeApp } from "firebase/app";
import { createContext, useState } from 'react';
import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import PrivateRoute from './component/RequiredAuth/PrivateRoute';
export const userContext = createContext();
function App() {
  const [user, setUser] = useState([])
  initializeApp(firebaseConfig);
  
  return (
    <div className="App container">
      <userContext.Provider value={[user,setUser]}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/NewAccount" element={<NewAccount/>} />
          <Route path="/dashboard" element={
          <PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
