import React from 'react';
import { 
  Switch, 
  Route
} from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
