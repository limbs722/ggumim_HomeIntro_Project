import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeIntro } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeIntro} />
    </BrowserRouter>
  );
};

export default App;
