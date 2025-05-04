import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import { useEffect, useState } from 'react';

import dummydata from './Data/rest_dummy'; //dummy api data

function App() {
  const [users, setUsers] = useState([...dummydata]);

  // useEffect(() => {
  // fetch();
  // setUsers(data)
  // }, [refresh]);

  return (
    <div className="App">
     <UserList userList={users}/> 
    </div>
  );
}

export default App;
