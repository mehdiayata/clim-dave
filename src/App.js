import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Realisation from './Pages/Realisation';
import Devis from './Pages/Devis';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/realisation" exact component={Realisation} />

          <Route path="/devis" exact component={Devis} />

          <Route component={NotFound} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

