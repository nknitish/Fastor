import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LoginPage from "./../LoginPage";
import VeryifyOTP from "./../VerifyOTP";
import ResturentList from "./../RestaurentList";
import Resturent from "./../Resturent";
import DesignPage from "./../Design";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DesignPage}></Route>
        <Route path="/verifyotp" component={VeryifyOTP}></Route>
        <Route path="/resturentlist" component={ResturentList}></Route>
        <Route path="/resturent" component={Resturent}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
