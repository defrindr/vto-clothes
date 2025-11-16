import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Custom from './components/Custom';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import { CustomizationalProvider } from './contexts/Customization';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Inspiration' component={Inspiration} exact />
        <Route path='/Custom' exact>
          <CustomizationalProvider>
            <Custom />
          </CustomizationalProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
