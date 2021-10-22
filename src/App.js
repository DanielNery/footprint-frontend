import './App.css';
import React from 'react';
import { useState } from 'react';

import Navbar from './components/navbar/Navbar.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Main from './components/main/Main.jsx';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    console.log("abrindo sidebar")
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    console.log("fechando sidebar")
    setSidebarOpen(false)
  }

  return (
    <div className={sidebarOpen ? 'container-open' : 'container-closed'}>

      <Navbar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} />
    
    </div>
  );
}

export default App;
