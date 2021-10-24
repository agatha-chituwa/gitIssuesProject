import React from 'react'
import {useEffect, useState} from 'react';
import './repos.css'
import { Link, Router, Switch } from 'react-router-dom';
// import Pagination from './Pagination';
import Moment from 'react-moment'
import AdjustIcon from '@mui/icons-material/Adjust';
import CheckIcon from '@mui/icons-material/Check';
import Filter from './Filter'




function Repos(html_url) {
    const [name, setName] = useState([]);
    const [url, setUrl] = useState([]);
    const [count, setCount] = useState([]);
    const [isShown, setIsShown] = useState({display: 'none'});


    // const pages = [] ;
    // for(let i; i<=Math.ceil(name.length/itemsPerPage); i++){
    //   pages.push(i);
    // }

    // const renderPages = pages.map(page=> {
    //   return(
    //     <li>{page}</li>
    //   )
    // })

    async function getRepos(url = `https://api.github.com/search/issues?q=alltype:issuesis:open`){
        try {
            // const url = `https://api.github.com/search/issues?q=alltype:issuesis:open&per_page=100`;     
            // result.items.forEach(i => console.log(i.full_name));
         const headers ={
          // "authorization": `basic ${btoa(`${userName}:${password}`)}`
          "Accept" : "application/vnd.github.cloak-preview"
        }
        const response = await fetch(url, {
          "method": "GET",
          "headers": headers

        })
        const result = await response.json();
        setName(result.items);
        setCount(result);
        const link = response.headers.get("link");
        const links = link.split(",");
        const urls = links.map(a=> {
          return{
            urll: a.split(";")[0].replace(">","").replace("<",""),
            title: a.split(";") [1]
          }
        });
        setUrl(urls);

         
       
          
        } catch (error) {
            console.log(error);
            
        }

    };

    function change(e){
      e.target.style.background = 'red';
    }




 

    
    
    useEffect(() => {
    getRepos();
 
    }, []);
 
  

   

    return (
        <div>
            {/* <button onClick={e => getRepos(1)}>button</button> */}
           {/* <div>
  {name.map(i => (
    <p key={i.id}> <li>{i.title}</li> <li> {i.state} </li> <li> #{i.number} </li> 
    <li> {i.created_at} </li> by <li> {i.user.login} </li> 
    </p>
  ))}
</div> */}
{/* <Link to={`//${i.html_url}`} > */}
<Filter/>

<br/>
<br/>

<div class=" col d-flex justify-content-center">
<div class="card" >
  <div class="card-header">
  <AdjustIcon/> {count.total_count} Open <CheckIcon/> 0 closed
  </div>     
  {name.map(i => (
  <ul class="list-group list-group-flush" key={i.id}>
     
   <li class="list-group-item"> <AdjustIcon className="round"/> <a href={`${i.html_url}`}
 
   > {i.html_url}  </a> <span className="bord"> {i.title} </span> <br/>
     <p className="small"> <small>   #{i.number} opened <Moment fromNow ago date={i.created_at}/> ago by  {i.user.login}   </small> </p>
  
     </li>
    
  </ul>
  ))}
</div>
    {/* <Pagination/> */}
     
</div>

<div className="centr">
{url.map(i => (
<button className="orange"  onClick={(e) => getRepos(i.urll)}>{i.title}</button>

  ))}
</div>

  



        </div>
    )
}

export default Repos
