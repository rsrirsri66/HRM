import logo from './logo.svg';
import './App.css';
import Login from '../src/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Sidebar/>
      <div id='content'>
        <Navbar/>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
