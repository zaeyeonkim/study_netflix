import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 홈페이지, 영화 전체보기(검색),상세페이지
// 
function App() {
  return (


    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="movies">
                <Route index element={<MoviePage />} />
                <Route path=':id' element={<MovieDetail />} />
            </Route> 
        </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>


  );
}

export default App;
