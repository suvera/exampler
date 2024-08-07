import React, {useState} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const [activeItem, setActiveItem] = useState(1);

  const handleSignOut = () => {
    // Add your sign-out logic here
    console.log('Sign out clicked');
    sessionStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Exampler
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" onClick={() => setActiveItem(1)} className={`${activeItem===1 ? "activeClicked" : ""}`}>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/exams-completed" onClick={() => setActiveItem(2)} className={`${activeItem===2 ? "activeClicked" : ""}`}>
              <CDBSidebarMenuItem icon="table">Complete Exams</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/exams-pending"onClick={() => setActiveItem(3)}  className={`${activeItem===3 ? "activeClicked" : ""}`}>
              <CDBSidebarMenuItem icon="user">Pending Exams</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" onClick={() => setActiveItem(4)} className={`${activeItem===4 ? "activeClicked" : ""}`}>
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink
              exact
              to="/hero404"
              target="_blank"
              onClick={() => setActiveItem(5)}
              className={`${activeItem===5 ? "activeClicked" : ""}`}
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
          <div
            style={{
              padding: '50px 20px 5px',
            }}
          >
           <CDBSidebarMenuItem icon="sign-out-alt" onClick={handleSignOut}>
              Sign Out
            </CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
