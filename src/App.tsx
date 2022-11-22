import React from 'react';
import './App.css';
import { ThreadList } from './ThreadList';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='AppTitle'>掲示板</span>
        <a href='' className='makeThread'>スレッドを立てる</a>
      </header>
      <Routes>
        <Route path='/' element={<ThreadList />} />
        <Route path='*' element={<ThreadList />} />
      </Routes>
    </div>
  );
}

export default App;
