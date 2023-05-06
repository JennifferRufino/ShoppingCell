import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { ProfileEdit } from "./pages/ProfileEdit";
import { Payment } from "./pages/Payment";

export const Rotas = () => {
  return (
    <Switch>
      <Route exact path='/payment/:price' component={ Payment } />
      <Route exact path='/profile/edit' component={ ProfileEdit } />
      <Route exact path='/profile' component={ Profile } />
      <Route exact path='/cart' component={ Cart } />
      <Route exact path='/store' component={ Store } />
      <Route exact path='/Loja-De-Compras' component={ Login } />
    </Switch>
  )
}