import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeIntro } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<HomeIntro />} />
    </Router>
  );
};

export default App;
