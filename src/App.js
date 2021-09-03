import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
