import React from 'react';
import { 
  Switch, 
  Route
} from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/homepage.component';
import About from './pages/about/about.component';
import Collection from './pages/collection/collection.component';
import CollectionDetail from './pages/collection-detail/colection-detail.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/collection-detail/:title,:id" component={CollectionDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
