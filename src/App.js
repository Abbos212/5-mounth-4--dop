import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Main, PostDetails, Users, Posts, Details } from './pages';
import Header from './pages/Header/Header';





function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Header/>}>
          <Route path='/' element={<Main />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/Details' element={<Details />} />
          </Route>
        </Routes>


      </Router>


  );
}

export default App;
