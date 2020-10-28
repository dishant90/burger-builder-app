import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
        <Layout>
          <Switch>
              <Route path='/burgerBuilder' component={BurgerBuilder} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/orders' component={Orders} />
              <Redirect from='/' to='/burgerBuilder' />
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
