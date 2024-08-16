import React from 'react';
import Logo from ".././assets/images/exms.pdf-image-002.jpg"
import "./Header.css";

function Header() {
    return (
        <header className="App-header">
          <div className='d-flex flex-row p-2 align-items-center'>
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className='m-2  text-shadow'>Examplar</h1>
          <p className='mt-4 m-2  text-shadow-p'>Setting the Standard for Online Assessment</p>
          </div>
          <hr  className='font-weight-bold'/>
        </header>
      );
}

export default Header