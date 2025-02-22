import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyForm from "./components/CompanyForm";
import QuestionsForm from "./components/QuestionsForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact component={CompanyForm} />
          <Route path="/questions" component={QuestionsForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
