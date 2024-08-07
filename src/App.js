import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from "react-router-dom";
import appRoutes from './routes/app-routes';
import authRoutes from './routes/auth-routes';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {

  const [token, setToken] = useState(sessionStorage.getItem("token"))

  useEffect(() => {
if(sessionStorage.getItem("token")){
  setToken(sessionStorage.getItem("token"))
}
  }, [])
  console.log(token)
  return (
  <div className="App">
    
    <div className="d-flex">

      <div className={`content ${token ? 'flex-grow-1 pt-0' : 'w-100 h-100'}`}>
      <RouterProvider  router={token ? appRoutes : authRoutes} />
     </div>
     </div>
    </div>
  );
}

export default App;
