import React, { useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Hero from '../Hero/Hero';

import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/collection' exact component={Hero} />
        <Route path='/profile' exact component={Hero} />
        <Route path='/' exact component={Hero} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
