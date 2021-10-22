// import React from 'react'
// import {useEffect, useState} from 'react';
// import parseLink from 'parse-link-header' 



// function Pagination() {
//     const [data, setData] = useState([]);

//     import parseLink from 'parse-link-header'


// export function getIssues(page = 1) {
//     let pageLinks, pageCount;

//     const url =  `https://api.github.com/search/issues?q=alltype:issuesis:open&page=${page}`;
  
//     return fetch(url)
//           .then(response => {
//                   pageLinks = parseLink(response.headers.get("Link"));
//                   pageCount = getPageCount(pageLinks);
//                   return response.json();
//                 })
//           .then(json =>{ 
//                   const data =  json.items ;
//                   return {pageLinks, pageCount, data};
//                   console.log(data)
//                 })
                  
//           .catch(error => Promise.reject(error));
//   }
//   const isLastPage = (pageLinks) => {
//     return Object.keys(pageLinks).length === 2 &&
//       pageLinks.first && pageLinks.prev;
//   }
  
  
//   const getPageCount = (pageLinks) => {
//     if(!pageLinks) {
//       return 0;
//     }
//     if(isLastPage(pageLinks)) {
//       return parseInt(pageLinks.prev.page, 10) + 1;
//     } else if(pageLinks.last) {
//       return parseInt(pageLinks.last.page, 10)
//     } else {
//       return 0;
//     }
//   }

        
 

    // const getUrl = async (url=`https://api.github.com/search/issues?q=alltype:issuesis:open`) => {
    //   try {
       
    //     const headers ={

    //       "Accept" : "application/vnd.github.cloak-preview"
    //     }
    //     // const response = await fetch(url, {
    //     //   "method": "GET",
    //     //   "headers": headers

    //     // })
    //     const response = await fetch(url);
    //     const result = await response.json();
    //     const link = response.headers.get("link");
    //     const links = link.split(",");
    //     const urls = links.map(a=> {
    //       return{
    //         urll: a.split(";")[0].replace(">","").replace("<",""),
    //         title: a.split(";") [1]
    //       }
    //     });
    //     setUrl(urls);
    //    console.log(result)
        
    //   } catch (error) {
        
    //   }
    // }
        // const renderData = (url) => {
        //     return(
        //         <ul>
        //             {url.map(( i)=> {
        //               return  <li >{i.title}</li>
        //               {console.log(i.title)}
        //             })}
        //         </ul>
        //     )
        // }

    // useEffect(() => {
    //    fetch('https://api.github.com/search/issues?q=all type:issues is:open')
    //    .then ((response) => response.json())
    //    .then((json) => setData(json))
    //    .then((link) =>  response.headers.get("link"))
    // }, [])

    return (
        <div>
            {/* {renderData(data)}
            <ul>
                    {url.map(( i)=> {
                        <li >{i.title}</li>
                      {console.log(i.urll)}
                    })}
                </ul> */}
        </div>
    )
}

export default Pagination
