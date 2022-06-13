import React from 'react'

// import '../styles/styles'

const User = ({ user, userRepos, userFollowers }) => {
    const repoJson = userRepos[0]
    const followerData = userFollowers
    // const repoObj = repoJson.map(item => item.language);
    return (
        user.login != null ? (
            < div className='user'>
                <div className='img--user-info'>
                    <p><b>Username: </b> {user.login}</p>
                    <p><b>Email: </b> {(user.email ? user.email : 'No email set')}</p>
                    <p><b>Number of Public repos: </b> {user.public_repos}</p>
                    <p><b>Languages Used in Each Repo Respectively: </b> {Object.values(userRepos).map(key => (key.language !== null ? key.language + (', ') : 'No language set, '))}</p>
                    <p><b>Followers: </b> {Object.values(userFollowers).map(key => (key.login !== null ? <a key={key.id} href={key.url}>{key.login + ',  '}</a> : 'No followers found'))} </p>
                </div>
                <div className='img--user-avatar'>
                    <img src={user.avatar_url} alt='user avatar' width='500' height='500' />
                </div>
            </div>
        ) : (
            <div>
                No user found
            </div>
        )
    )
}

export default User