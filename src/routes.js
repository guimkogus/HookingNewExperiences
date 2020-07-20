import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Movies from "./pages/Movies";
import Rentals from "./pages/Rentals";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import MovieForm from "./pages/MovieForm";
import LoginForm from "./pages/LoginForm";
import GlobalStyles from "./config/globalStyles";
import RegisterForm from "./pages/RegisterForm";

export default () => {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </GlobalStyles>
  );
};
