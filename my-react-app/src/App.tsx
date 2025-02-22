import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyForm from './components/CompanyForm';
import QuestionsForm from './components/QuestionsForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CompanyForm} />
        <Route path="/questions" component={QuestionsForm} />
      </Switch>
    </Router>
  );
};

export default App;