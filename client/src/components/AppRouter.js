import React, { Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () =>{
    const isAuth = false;

    return(
        <Switch>
                {
                isAuth === true && authRoutes.map(({path,Component})=>
                <Route key = {path} path = {path} Component={Component} exact/>
                )}
                
                {
                publicRoutes.map(({path,Component})=>
                <Route key = {path} path = {path} Component={Component} exact/>
                )}
        </Switch>
    );
};

export default AppRouter;
