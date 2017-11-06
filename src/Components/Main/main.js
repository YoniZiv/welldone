import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Profile from "../Profile/profile";
import Home from "../Home/home";

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

export class Main extends Component {



    styleObj = {
        flexGrow: 1,
        minHeight: "calc(100vh - 150px - 50px - 100px)",
        backgroundImage: "url('https://ak3.picdn.net/shutterstock/videos/11659394/thumb/1.jpg?i10c=img.resize(height:160)')",
        // backgroundImage: "url('https://cdn.shutterstock.com/shutterstock/videos/13377692/thumb/1.jpg?i10c=img.resize(height:160)')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    };

    render() {
        return (
            <section id="app-main">
                <div style={ this.styleObj }>
                    <Switch>
                        <Route path="/profile" component={ Profile }/>
                        <Route path="/" component={ Home }/>
                    </Switch>
                </div>
            </section>
        );
    }

}