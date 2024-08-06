import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => {
const [activeItem, setActiveItem] = useState(1);
    const singout = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }

const changeItem = id => {
    setActiveItem(id)
}
  return (
    <div className="sidebar bg-light">
      <ul className="list-unstyled">
        <li onClick={()=> changeItem(1)}><Link to="/dashboard" className={`${activeItem===1? "":"text-decoration-none"}`}>Dashboard</Link></li>
        <li onClick={()=> changeItem(2)}><Link to="/completed-exams" className={`${activeItem===2? "":"text-decoration-none"}`}>Completed Exams</Link></li>
        <li onClick={()=> changeItem(3)}><Link to="/pending-exams"className={`${activeItem===3? "":"text-decoration-none"}`}>Pending Exams</Link></li>
        <li className='sign-out' onClick={singout}><Link to="/" className="text-decoration-none">Sign out</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;