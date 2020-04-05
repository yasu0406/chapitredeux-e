import React from 'react';
import { 
  Switch, 
  Route
} from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/homepage.component';
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
