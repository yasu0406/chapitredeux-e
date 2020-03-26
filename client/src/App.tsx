import React from 'react';
import { 
  Switch, 
  Route
} from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/homepage.component';

import { Container } from './styles/common.styled.component';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
