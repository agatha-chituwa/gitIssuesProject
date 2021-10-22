import React from 'react';
import './Navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub'
 import AddIcon from '@mui/icons-material/Add';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <div>
                <nav className="nav-bar">

<div className="wrapper">
    <div>
        
        <i className="fa fa-github fa-2x" aria-hidden="true"><GitHubIcon/></i>
    </div>
    <div>
        <button type="button" className="btn"><GitHubIcon/></button>
    </div>
    <div>
        <input type="text" className="text-input " placeholder="Search"/>
    </div>
    <div>
        <a  className="nav-link custom">Pull requests</a>
    </div>
    <div>
        <a className="nav-link">Issues</a>
    </div>
    <div>
        <a className="nav-link">Marketplace</a>
    </div>
   

    <div>
        <i className="fa fa-bell"> <NotificationsNoneIcon/> </i>
    </div>
    <div>
        <i className="fa fa-plus"> < AddIcon/> </i>
    </div>
 
    <div>
        <i className="fa fa-user"> <AccountCircleIcon/> </i>
    </div>

</div>

</nav>

            
        </div>
    )
}

export default Navbar
