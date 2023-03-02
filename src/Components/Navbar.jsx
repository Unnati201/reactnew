import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './Styles/navbar.scss';
import { routes } from './Data/Navbar-item';
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from "./Dropdown/Dropdown"


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
  return (
  
      



    <div className='app__navbar'>
      <div className='navbar__logo'>
        <img style={{height:"40px", width:"80px" }} src="rgs-img/logo.png" alt="" ></img>
      </div>
      {/* <ul className='navbar__routes'> 
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}> {route.name}</a>
           
          </li>

      


           
        ))}
      </ul>
      </ul>
     */}


{/* <ul className="nav-items"> */}
<ul className='navbar__routes'>
  <ul className='navbar__routes'>
          {routes.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          </ul>
        </ul>








    <div class="nav-search">
      <SearchIcon /> 
      {/* <img src="rgs-img/search.png" alt=""></img> */}
     </div> 

      
      <div>
       <div className="nav-contact"><a   href="./contact">Contact</a></div> 
     
   </div>
    </div>
    
  );
};

export default Navbar;
