import React, { useState } from 'react';
import "./App.css";
import Header from './component/Header/Header';

// const usersJsonData = require('./json/Users.json');

const App: React.FC = () => {

  // const [Users, setUsers] = useState<[]>();



  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default App