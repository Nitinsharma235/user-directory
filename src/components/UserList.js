import UserCard from './UserCard'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

const UserList = ({userList = []}) => {
  const { isDarkMode } = useContext(ThemeContext);

  console.log(userList)
  return (
           
    <div  >        
      {
        userList.map((user) => {
            return (
              <div className={isDarkMode ? 'dark-theme column' : 'light-theme column'}>
                  <UserCard user={user} />
              </div> 
            )
        })
      }
    </div>
  
  )
}

export default UserList







