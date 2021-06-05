import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Realisation from './Pages/Realisation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />

          <Route path="/realisation" component={Realisation} />

          <Route path="/dave-clim" component={Home}></Route>

          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

