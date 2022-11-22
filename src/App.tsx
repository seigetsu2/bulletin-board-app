import React from 'react';
import AppModule from './App.module.css';
import { ThreadList } from './ThreadList';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className={AppModule.App}>
      <header className={AppModule['App-header']}>
        <span>掲示板</span>
        <a href=''>スレッドを立てる</a>
      </header>
      <Routes>
        <Route path='/' element={<ThreadList />} />
        <Route path='*' element={<ThreadList />} />
      </Routes>
    </div>
  );
}

export default App;
