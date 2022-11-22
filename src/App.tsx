import React from 'react';
import './App.css';
import { ThreadList } from './ThreadList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='AppTitle'>掲示板</span>
        <a href='' className='makeThread'>スレッドを立てる</a>
      </header>
      <ThreadList />
    </div>
  );
}

export default App;
