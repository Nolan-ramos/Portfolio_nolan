import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

import routes from './routes';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Navbar />
          <div className='main'>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </div>
        </Router>
      </div>
      <Background />
    </>
  );
}

export default App;
