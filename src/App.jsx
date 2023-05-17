import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './components/P3_Orgamisms/Header';

const App=()=>{
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/straipsniai' element={<h1>Pagrindinis page</h1>}/>
        <Route path='/forumas' element={<h1>Forums page</h1>}/>
        <Route path='/bendruomene' element={<h1>Mūsų bendruomenė</h1>}/>
      </Routes>
    </>
  );
}

export default App;
