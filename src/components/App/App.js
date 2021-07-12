import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./../Header/Header";
import Main from "./../../pages/Main/Main";
import Info from "./../../pages/Info/Info";
import ConverterPage from "./../../pages/ConverterPage/ConverterPage";
import NotFound from "./../../pages/NotFound/NotFound";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/" component={Main} />
                <Route
                    path="/info/:id"
                    render={({ match, location, history }) => {
                        return <Info id={match.params.id} />;
                    }}
                    exact
                />

                <Route exact path="/converter" component={ConverterPage} />

                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
