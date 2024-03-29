import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/homepage.component';
import Routing from './components/routing.component';
import Login from './components/login.component';
import 'react-bootstrap'




let App=()=> {

  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/demodrive" element={<Routing/>} />
          <Route path="/modelY" element={<Routing/>}/> 
          <Route path="/model3" element={<Routing/>}/>
            <Route path="/modelX" element={<Routing/>}/>
            <Route path="/modelS" element={<Routing/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
