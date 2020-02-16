import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';


/* comment /uncomment for preview between memo/lazyloading/contextAPI */
import Parent from './Component/Memo/Parent';
import TaskList from './Component/context/TaskList';
import TaskListContextProvider from './Component/context/TaskListContext';
// import Parent from './Component/LazyLoading/Parent'
function App() {
  return (
    <div className="App">
      <header className="App-header">    
      <TaskListContextProvider>
      <TaskList />
      </TaskListContextProvider>
      </header>
    </div>
  );
}

export default App;
