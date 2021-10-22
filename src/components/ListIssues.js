import React from 'react';
import './ListIssues.css';
import {useEffect, useState} from 'react';

function ListIssues() {
  const [name, setName] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/repos/rails/rails/issues')
          .then (res => res.json())
          .then (data => 
            
            // ,
            console.log(data[0].user.login)
            )
      }, []);
      

      // const setData = ({id}) =>{
      //   setName(id);
      // }
      // console.log(name);
      // const getIssues = async () => {
      //     try {
        
      //         const response = await fetch('https://api.github.com/repos/rails/rails/issues');
      //         const jsondata = await response.json();
      //         console.log(jsondata);
      //     } catch (err) {
      //         console.log(err.message)
              
      //     }
      // }


    return (
        <div>
        <form classNameName="form">
         
         <input type="text" placeholder='search' name= 'github user' />
         
         <input type="submit" value="" placeholder='search' />
          
      </form>

            <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link" >27 763 open</a>
      </li>
      <li className="nav-item">
        {name}
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
  <li className="nav-item">
 
      </li>
  </div>
</div>
            
        </div>
    )
}

export default ListIssues
