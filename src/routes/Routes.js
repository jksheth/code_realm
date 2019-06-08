import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Desktop from '../components/desktopView';
import CreateContact from '../components/createEditContactView';

export default function ApplicationRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Desktop} />
            <Route path="/home" component={Desktop} />
            <Route path="/createContact" component={CreateContact} />
        </Switch>
    );
};
