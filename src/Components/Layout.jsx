import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className='d-flex flex-row' style={{ width: "100vw", height: "100vh" }}>
      <Sidebar />
      <div className='d-flex flex-column flex-grow-1'>
        <Header />
        <div className='flex-grow-1 p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout