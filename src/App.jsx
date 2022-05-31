import React from 'react';
/* import './App.css'; */
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Provider from './Context/Provider';
import { Route, Routes } from 'react-router-dom';
import PageLogin from './Pages/PageLogin';
import PageSearch from './Pages/PageSearch';
import PageAlbum from './Pages/PageAlbum';
import PageFavorites from './Pages/PageFavorites';
import PageProfile from './Pages/PageProfile';
import PageProfileEdit from './Pages/PageProfileEdit';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <PageLogin /> } />
        <Route exact path="/search" element={ <PageSearch /> } />
        <Route exact path="/album/:id" element={ <PageAlbum /> } />
        <Route exact path="/favorites" element={ <PageFavorites /> } />
        <Route exact path="/profile" element={ <PageProfile /> } />
        <Route exact path="/profile/edit" element={ <PageProfileEdit /> } />
        <Route exact path='*' element={ <PageNotFound /> } />
      </Routes>
    </Provider>
  );
}

export default App;
