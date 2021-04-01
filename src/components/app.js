import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import AddBlog from "./pages/admin/add_blog";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Auth from "./pages/admin";

import 'bootstrap/dist/css/bootstrap.min.css';

import Finance from "./pages/pillars/finance";
import Relationships from "./pages/pillars/relationships";
import Employment from "./pages/pillars/employment";
import Spirituality from "./pages/pillars/spirituality";
import Health from "./pages/pillars/health";

import Member from "../components/pages/member/member";
import NewMember from "../components/pages/member/new_member";

import Redirect from "./redirect";
import YTRedirect from "./ytredirect";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="router">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/instagram/" component={Redirect} />
              <Route path="/facebook" component={Redirect} />
              <Route path="/youtube" component={YTRedirect} />

              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/shop" component={Shop} />
              <Route path="/login" component={Login} />
              <Route path="/auth" component={Auth} />
              <Route path="/member" component={Member} />

              <Route path="/pillars/finance" component={Finance} />
              <Route path="/pillars/relationships" component={Relationships} />
              <Route path="/pillars/employment" component={Employment} />
              <Route path="/pillars/spirituality" component={Spirituality} />
              <Route path="/pillars/health" component={Health} />

              <Route path="/member/member" component={Member} />
              <Route path="/member/new_member" component={NewMember} />

              <Route path="/admin/add_blog" component={AddBlog} />
            </Switch>
          </Router>
        </div>

      </div>

    );
  };
}
