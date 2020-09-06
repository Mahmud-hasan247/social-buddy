import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NewsDetail from './Components/NewsDetail/NewsDetail';
import Comments from './Components/Comments/Comments';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/home'>
        <Home/>
        </Route>
        <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/detail/:newsId'>
            <NewsDetail/>
          </Route>
          <Route path='/detail/comments?postId=:newsId'>
            <Comments/>
          </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
