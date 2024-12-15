import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Tv from '../pages/Tv';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from '../pages/HomeLayout';
import MovieId from '../pages/MovieId';
import TvId from '../pages/TvId';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie' element={<Movie />} />
                    <Route path='/tv' element={<Tv />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/movie/:id' element={<MovieId />} />
                    <Route path='/tv/:id' element={<TvId />} />
                    <Route path='/*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App