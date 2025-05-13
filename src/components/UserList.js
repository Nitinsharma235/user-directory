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








// className={isDarkMode ? 'dark-theme' : 'light-theme'}
// className={isDarkMode ? 'dark-theme column' : 'light-theme column'}
// # User Directory App

// ## Objective
// Build a simple **User Directory** app in React that fetches user data from a public API and displays it in a card layout.

// ## Requirements

// ### 1. React App Setup
// - Use Create React App (CRA) or Vite.
// - Keep code modular (use components and CSS modules or styled-components).

// ### 2. UI Features
// - A search input to filter users by name.
// - Display user data (name, email, phone, and profile picture).
// - Each user should appear as a card (in a grid or list).
// - Responsive layout.

// ### 3. Data Source
// - Use the public API: `https://randomuser.me/api/?results=10`
// - On page load, fetch and display 10 users.

// ### 4. Components to Create
// - `UserCard`: to display a single user.
// - `UserList`: to render a list of `UserCard`s.
// - `SearchBar`: input to filter users by name.

// ### 5. Bonus (Optional)
// - Add loading and error states.
// - Allow refreshing the user list with a button.
// - Implement light/dark theme toggle.

// ## Suggested Folder Structure

// ```
// src/
// ├── components/
// │   ├── UserCard.jsx
// │   ├── UserList.jsx
// │   └── SearchBar.jsx
// ├── App.jsx
// └── index.js