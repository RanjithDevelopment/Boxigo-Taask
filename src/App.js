import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Cards from './components/cards.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/' element={<Cards/>}/>     
            </Routes>
          </div>
        </div>
      </div>



    </>
  );
}

export default App;
