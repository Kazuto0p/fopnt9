
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

import Signup from './components/Signup';

import Home from './components/Home';
import Home6 from './components/Home6';
// import { Dashboard } from '@mui/icons-material';
// import View from './components/View';
import Dashboard from './components/Dashboard';
import DataView from './components/DataView';
import Orderh from './components/Orderh';
import Specialoffers from './components/Specialoffers';
import Payment from './components/Payment';
import Pay from './components/Pay';



function App() {
  return (
    <div className="App">
  
      {/* <Navbar/> */}
      {/* <DataView/> */}
 
    
      <Routes>
        <Route path='/' element={<><Navbar/><Home6/></>}/>
        {/* <Route path='/Home' element={<><Home/><Dashboard/><View/></>}/> */}
        <Route path='/Home' element={<><Home/><Dashboard/><DataView/></>}/>
        {/* <Route path='Admin'element={<><Navbar/><Admin/></>}/> */}
        <Route path='Signup'element={<><Navbar/><Signup/></>}/>
        <Route path='Login' element={<><Navbar/><Login/></>}/>
        <Route path='Orderh' element={<><Home/><Orderh/></>}/>
        <Route path='Specialoffers' element={<><Home/><Specialoffers/></>}/>
        <Route path='Payment' element={<><Home/><Payment/></>}/>
        <Route path="/pay" element={<><Navbar/><Pay/></>} />
      </Routes>
    </div>
  );
}

export default App;