import React from 'react'

const UserCard = ({user}) => {
  return (
        
    <div>
      <span><img className= "profilepic" src={user.picture.medium}></img></span><br/>
      <span>Name  :{user.name.title} {user.name.first} {user.name.last}</span><br/>
      <span>Phone :{user.phone}</span><br/>
      <span>Email :{user.email}</span><br/>
     
      <hr/>
    </div>
  )
}

export default UserCard
