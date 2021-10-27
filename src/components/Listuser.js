import React from 'react'
import {useEffect, useState} from 'react';

function Listuser() {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avater, setAvater] = useState('');
    const [userInput, setUserInput] = useState('');
  

    useEffect(() => {
        fetch('https://api.github.com/users/agatha-chituwa')
          .then (res => res.json())
          .then (data => {
            setData(data);
            })
      }, []);
      
      const setData = ({name, login, followers, following, public_repos, avater_url}) => {
        setName(name);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvater(avater_url)
      }

      const handleSearch = (e) => {
        setUserInput(e.target.value)
      }
      const handlesubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
          .then (res => res.json())
          .then (data => 
            setData(data)
            
            )
      }
      
    
    

    return (
        <div>
            
    <div classNameName="App">
       

        <form onSubmit={handlesubmit} className="form">
         
           <input type="text" placeholder='search' name= 'github user' value={userInput} onChange={handleSearch} />
           
           {/* <input type="submit" value="" /> */}
            
        </form>


        <div className="card-group">
  <div className="card">
 
  </div>
  <div className="card">
    <img src={avater} alt="avater" className="card-img-top" wraped ui='false' />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h5 className="card-title">{userName}</h5>
      <h5 className="card-title">{followers} followers</h5>
      <h5 className="card-title">{repos} repos</h5>
      <h5 className="card-title">{following} following</h5>
     
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
   
  </div>
</div>
        </div>
        </div>
    )
}

export default Listuser