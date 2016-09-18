import Match from 'react-router/Match';
import Router from 'react-router/BrowserRouter';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Information from './Information';
import NotFound from './NotFound';

const App = ({ base }) => {
  const wrapped = Component => props => <Component base={base} {...props} />;
  return (
    <Router>
      <div>
        <Header />
        <Match exactly pattern="/" component={NotFound} />
        <Match pattern="/:personId" component={wrapped(Information)} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
