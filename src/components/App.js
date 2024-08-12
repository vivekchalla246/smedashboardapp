import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;