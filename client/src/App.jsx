import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Bookshelf from "./pages/Bookshelf";
import Form from "./pages/Form";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />

        <Route path="/books/add" exact>
          <Form formType="add" />
        </Route>

        <Route path="/books/edit/:id" exact>
          <Form formType="edit" />
        </Route>

        <Route
          path={["/books", "/books/:search"]}
          exact
          component={Bookshelf}
        />

        <Route path="/books/details/:id" exact component={Details} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
