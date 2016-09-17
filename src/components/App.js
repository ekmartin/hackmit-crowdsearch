import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Information from './Information';

const App = ({ base }) => (
  <div>
    <Header />
    <Information base={base} personId={1} />
    <Footer />
  </div>
);

export default App;
