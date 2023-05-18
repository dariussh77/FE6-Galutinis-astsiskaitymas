import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './components/P3_Orgamisms/Header';
import Straipsniai from './components/P5_Pages/Straipsniai';
import Nav from './components/P3_Orgamisms/Nav';
import styled from 'styled-components';
import Footer from './components/P3_Orgamisms/Footer';
import ForumCards from './components/P5_Pages/ForumCards';
import ForumComments from './components/P5_Pages/ForumComments';
const MainBlockCSS=styled.div`
  display: flex;
`;

const App=()=>{
  return (
    <>
      <Header/>
      <MainBlockCSS>
        <Nav/>
        <Routes>
          <Route path='/straipsniai' element={<Straipsniai/>}/>
          <Route path='/forumas' element={<ForumCards/>}/>
          <Route path='/forumas/:id' element={<ForumComments/>}/>
          <Route path='/bendruomene' element={<h1>Mūsų bendruomenė</h1>}/>
        </Routes>
      </MainBlockCSS>
      <Footer/>
    </>
  );
} 

export default App;
