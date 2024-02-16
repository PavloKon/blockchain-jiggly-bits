import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PublicLayout from './Layouts/mainLayout';
import HomePage from '../pages/home';

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PublicLayout />}>
          <Route exact path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default routes;