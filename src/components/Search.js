import React, { useState } from 'react'

const Search = ({ username, setUsername, startSearch, searchRepos, searchFollowers }) => {
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <input type='text' placeholder='Enter a Github username to search' aria-label='Enter a username here' value={username} onChange={handleChange}></input>
            <button type='submit' onClick={(e) => {
                e.preventDefault()
                startSearch()
                searchRepos()
                searchFollowers()
            }}>Search</button>
        </div >
    )
}

export default Search