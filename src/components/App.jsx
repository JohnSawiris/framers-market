import React from 'react';
import Header from './Header';
import Week from './Week';
import Months from './Months';
import { Switch, Route } from 'react-router-dom';


function App() {
  return(
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={Months} />
         <Route path='/events' component={Week} />
        <Week />
        <hr />
        <Months />
      </Switch>
    </div>
  );
}

export default App;
