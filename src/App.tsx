import React, { useState } from 'react';
import "./App.css";
import Header from './component/Header/Header';
import Users from './component/Users/Users';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Users />
    </div>
  )
}

export default App