import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const UserCard = ({user}) => {  
  const { isDarkMode } = useContext(ThemeContext);

  return (
        
    <div className={isDarkMode ? 'dark-theme user-grid' : 'light-theme user-grid'} >
      <span><img className= "profilepic" src={user.picture.medium} alt='profile pic'></img></span><br/>
      <span>Name  :{user.name.title} {user.name.first} {user.name.last}</span><br/>
      <span>Phone :{user.phone}</span><br/>
      <span>Email :{user.email}</span><br/>
    </div>
  )
}

export default UserCard
