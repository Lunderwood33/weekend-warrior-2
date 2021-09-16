import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "/Users/lincolndunderwood/workspace/weekend-warrior-2/src/components/ApplicationViews.js";
import { NavBar } from "./navigation/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./auth/Login.css";


export const WeekendWarrior = () => (
  <>

    <Route
      render={() => {
        if (localStorage.getItem("weekendWarrior_user_id")) {
          return (
            <>
              <NavBar />
              <h1>Weekend Warrior</h1>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
      

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);