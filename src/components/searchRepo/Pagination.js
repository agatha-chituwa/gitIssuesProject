// import React from 'react'

// function Pagination(url) {

//     async function getRepos(url = `https://api.github.com/search/issues?q=alltype:issuesis:open`){
//         try {
//             // const url = `https://api.github.com/search/issues?q=alltype:issuesis:open`;     
//             // result.items.forEach(i => console.log(i.full_name));
//          const headers ={
//           // "authorization": `basic ${btoa(`${userName}:${password}`)}`
//           "Accept" : "application/vnd.github.cloak-preview"
//         }
//         const response = await fetch(url, {
//           "method": "GET",
//           "headers": headers

//         })
//         const result = await response.json();
//         setName(result.items);
//         const link = response.headers.get("link");
//         const links = link.split(",");
//         const urls = links.map(a=> { 
//           return{
//             urll: a.split(";")[0].replace(">","").replace("<",""),
//             title: a.split(";") [1]
//           }
//         });
//         setUrl(urls);

         
       
          
//         } catch (error) {
//             console.log(error);
            
//         }

//     };
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Pagination
