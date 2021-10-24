import React from 'react'
import './Filter.css'
import SearchIcon from '@mui/icons-material/Search';

function Filter() {
    
    async function getRepos(url = `https://api.github.com/search/issues?q=alltype:issuesis:open author:agatha-chituwa`){
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
       
        console.log(result.items)

        } catch (error) {
            console.log(error);
            
        }

    };
    return (
        <div>
            
<div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">created</button>
    <button type="button" class="btn btn-outline-secondary">assigned</button>
    <button type="button" class="btn btn-outline-secondary">mentioned</button>

  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon"> <SearchIcon/> </div>
    <input type="text" class="form-control" placeholder="Input group example" value="is:open" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </div>
</div>
            
        </div>
    )
}

export default Filter
