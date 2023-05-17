import './App.css';
import {Route,Routes} from 'react-router-dom';

const App=()=>{
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Pagrindinis page</h1>}/>
        <Route path='/forums' element={<h1>Forums page</h1>}/>
        <Route path='/members' element={<h1>Mūsų bendruomenė</h1>}/>
      </Routes>
    </>
  );
}

export default App;
