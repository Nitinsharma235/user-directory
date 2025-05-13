import './App.css'; 
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { useEffect, useState,useRef} from 'react';
import { ThemeContext } from './components/ThemeContext';

function App() {
  const [users, setUsers] = useState([]);   
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);          // to show errors
  const [isDarkMode, setIsDarkMode] = useState(false);
  const hasFetched = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);



  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  function filterData(){
    if(!search){
      return users;
    }
    return users.filter((person) =>{
      var fullname = person.name.first + person.name.last ;
      return fullname.toLowerCase().includes(search.toLowerCase())
    }
    );
  }
  function fetchData() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) =>{
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
          return  response.json()
        })
      .then(fetchedData =>{
          // setUsers(prev => [...prev, ...fetchedData.results])
          setUsers([...users,...fetchedData.results])
        })
      .catch((error) => {
          setError(error.message)
      })
      .finally(() => {
          setIsLoading(false); // stop loading
      });
  }
  useEffect (() =>{
    // if (hasFetched.current) return;
    // hasFetched.current = true;
    fetchData();
   },[currentPage]);

   function searchData(name){
      setSearch(name);
      setCurrentPage(1);
   }
        
  if (isLoading) {
    return <div>Loading........</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button onClick={fetchData}>Refresh</button>
      <SearchBar onFilter={searchData}/><hr/>
      <UserList userList={[...filterData()].slice((currentPage-1)*10,currentPage*10)}/>
    </div> 
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
      Previous
      </button> <h2>{currentPage}</h2>
     
      <button onClick={() => setCurrentPage(prev => prev + 1)}>
      Next
      </button>
      

    </ThemeContext.Provider>
  );
}

export default App;









// https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc123
// [...fetchedData.results]
// const tofetch = () => {
//   setIsLoading(true); 
//   setError(null);
// className={isDarkMode ? 'dark-theme' : 'light-theme'}
//----------------------------------
// .then(fetchedData =>{
//   console.log("data-->",fetchedData )
//   setTimeout(() => {
//     setUsers([...fetchedData.results])
//   }, 1000);
// })
 /* <button onClick={tofetch}>Fetch</button>
      {isLoading && <p >Loading...</p>} */
      // {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
    // console.log("error-->",error)
    // <UserList userList={[...filterData()]} isDarkMode={isDarkMode}/>
//-------------------------------
  // let xhr = new XMLHttpRequest();

  // xhr.open('GET','https://randomuser.me/api/?results=10', true);

  // // onload function to get data 
  // xhr.onload = function () {
  //   if (this.status === 200) {
  //     const fetchedData= JSON.parse(this.responseText);
  //     setUsers([...fetchedData.results]);
  //   }
  // }
  //  // Send function to send data
  // xhr.send() ;


//   function tofetch(){
//     setIsLoading(true);  
//       fetch('https://randomuser.me/api/?results=10')
//       .then(response => response.json())
//       .then( fetchedData =>setUsers([...fetchedData.results]) )
//       .catch(error => console.error('Error:', error));  
// }