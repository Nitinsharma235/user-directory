import React from 'react'
import UserCard from './UserCard'

const UserList = ({userList = []}) => {
  console.log(userList)
  return (
    <div>        
      {
        userList.map((user) => {
            return (
                <UserCard user={user}/>
            )
        })
      }
    </div>
  )
}

export default UserList
