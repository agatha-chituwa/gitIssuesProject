import React from 'react'
import  './Nav.css'
import GitHubIcon from '@mui/icons-material/GitHub'
 import AddIcon from '@mui/icons-material/Add';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Nav() {
    return (
        <div>
      <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><GitHubIcon className="git"/></a>
     
      <a class="py-2" href="#" aria-label="Product">
     
    </a>

   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          
          <li class="nav-item">
            <a class="nav-link" href="#">pull request</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">issues</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Marketplace</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">explore</a>
          </li>
        
          
        </ul>
 
        <NotificationsNoneIcon className="icons"/>
        <AddIcon className="icons"/>
        
        <AccountCircleIcon className="icons" />
      </div>
    </div>
  </nav>
</header>
            
        </div>
    )
}

export default Nav
