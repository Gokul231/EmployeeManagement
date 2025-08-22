import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDetails from './pages/EmployeeDetails';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employee/:id" component={EmployeeDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;