import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { WeekendWarrior } from './components/WeekendWarrior';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <WeekendWarrior />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
