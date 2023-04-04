import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/homepage.component';
import ModelX from './components/modelx.component'
import ModelS from './components/models.component';
import ModelY from './components/modely.component';
import Model3 from './components/model3.component';
import DemoDriveForm from './components/demodriveform.component';
import NavBar from './components/navbar.component';
let App=()=> {
  return (
    <div className='App'>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/demodrive" element={<DemoDriveForm />} />
          <Route path="/modelY" element={<ModelY/>}/> 
          <Route path="/model3" element={<Model3/>}/>
          <Route path="/modelS" element={<ModelS/>}/>
            <Route path="/modelX" element={<ModelX/>}/>
          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
