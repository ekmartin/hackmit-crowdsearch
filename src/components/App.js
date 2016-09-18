import Match from 'react-router/Match';
import Router from 'react-router/BrowserRouter';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Information from './Information';
import Contribute from './Contribute';
import Overview from './Overview';
import Tasks from './Tasks';

const App = ({ base }) => {
  const wrapped = Component => props => <Component base={base} {...props} />;
  return (
    <Router>
      <div>
        <Header />
        <Match exactly pattern="/" component={wrapped(Overview)} />
        <Match exactly pattern="/:personId" component={wrapped(Information)} />
        <Match exactly pattern="/:personId/contribute" component={wrapped(Contribute)} />
        <Match exactly pattern="/:personId/tasks" component={wrapped(Tasks)} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
