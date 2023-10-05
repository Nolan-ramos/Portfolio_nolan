import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Cursor from './components/cursor/Cursor';
import Navbar from './components/navbar/Navbar';
import './reset.scss';
import routes from './routes';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Router>
      </div>
      <Cursor />
    </>
  );
}

export default App;
