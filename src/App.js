import './App.css';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import { ThemeContext } from './components/ThemeContext';

function App() {
  const [usersByPage, setUsersByPage] = useState({}); // Store users per page
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  function fetchData(page) {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        setUsersByPage((prev) => ({
          ...prev,
          [page]: fetchedData.results,
        }));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (!usersByPage[currentPage]) {
      fetchData(currentPage);
    }
  }, [currentPage]);

 
  function filterData() {
    const currentUsers = Object.values(usersByPage).flat();
    if (!search) return usersByPage[currentPage] ||[];
    
    return currentUsers.filter((person) => {
      const fullName = person.name.title + " " + person.name.first + " " + person.name.last;
      return fullName.toLowerCase().includes(search.toLowerCase());
    });
  }
  
  
  function searchData(name) {
    setSearch(name);
    if (name!==" "){
      setCurrentPage(currentPage);
    }
    else { 
      setCurrentPage(1);
    }
  }

  
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'} >
       <h1 style={{textAlign: 'center'}}>User Directory</h1>
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button onClick={() => fetchData(currentPage)}>Refresh</button>

        <SearchBar onFilter={searchData} />
        {search && (
          <button onClick={() => searchData("")}>Reset Search</button>
                  )}

        <hr />
        <div style={{  display: 'flex',  flexDirection: 'column',  minHeight: '100vh' }} >
    
        <div style={{ minHeight: '300px' }}> 
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : ( 
        <UserList userList={filterData()} />
         )}
         </div>
         </div><br/>
        <div style={{
        marginTop: 'auto',
        padding: '10px',
        backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
        textAlign: 'center',
      }}
  >
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span > Page:{currentPage}/{Math.max(Object.values(usersByPage).length,currentPage)}</span>

          <button onClick={() => setCurrentPage((prev) => prev + 1)}>
            Next
          </button>
        </div>
       
      </div>
    </ThemeContext.Provider>
  );
}

export default App;











