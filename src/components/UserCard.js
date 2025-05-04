import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <span>title: {user.name.title}</span><br/>
      <span>First name: {user.name.first}</span><br/>
      <span>Lsst Namename: {user.name.last}</span><br/>
      <span>City :{user.location.city}</span><br/>
      <span>picture :<img src={user.picture.medium}></img></span>
      <hr/>
    </div>
  )
}

export default UserCard
