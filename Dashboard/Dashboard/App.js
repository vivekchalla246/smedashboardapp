import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            {/* Future routes can be added here */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
