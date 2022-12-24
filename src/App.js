import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CommonPage from './CommonComponent/CommonPages/CommonPage';
import Header from './CommonComponent/Header/Header';
import MovieComponent from './CommonComponent/MovieComponent/MovieComponent';
import Home from './Pages/Home/Home';
 
function App() {
  return (
  <Router>
    <Header/>
<Routes>
    <Route index element={<Home/>}/>
    <Route path="movie/:id" index element={<MovieComponent/>}/>
    <Route path="movies/:type" index element={<CommonPage/>}/>


</Routes>
  </Router>
  );
}

export default App;
