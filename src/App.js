import React, { useState } from 'react';

import './styles/style.scss'

import Header from './components/Header'
import Search from "./components/Search";
import User from './components/User';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [userRepos, setUserRepos] = useState('');
  const [userFollowers, setUserFollowers] = useState('');

  const startSearch = async () => {
    fetch(`https://api.github.com/users/${username}`).then(
      data => data.json()
    ).then(
      data => setUser(data)
    )

  }

  const searchRepos = async () => {
    fetch(`https://api.github.com/users/${username}/repos`).then(
      data => data.json()
    ).then(
      data => setUserRepos(data)
    )
  }

  const searchFollowers = async () => {
    fetch(`https://api.github.com/users/${username}/followers`).then(
      data => data.json()
    ).then(
      data => setUserFollowers(data)
    )
  }


  return (
    <div className="App">
      <Header />
      <Search username={username} setUsername={setUsername} startSearch={startSearch} searchRepos={searchRepos} searchFollowers={searchFollowers} />
      <User user={user} userRepos={userRepos} userFollowers={userFollowers} />
    </div>
  );
}

export default App;
