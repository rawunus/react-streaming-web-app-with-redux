import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header"
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route
                            path="/stream/new"
                            exact
                            component={StreamCreate}
                        />
                        <Route
                            path="/stream/edit/:id"
                            exact
                            component={StreamEdit}
                        />
                        <Route
                            path="/stream/delete/:id"
                            exact
                            component={StreamDelete}
                        />
                        <Route
                            path="/stream/:id"
                            exact
                            component={StreamShow}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;

// cleint Id
// 760081425719-achunak4blef7be86v09mtg5m9sf4q15.apps.googleusercontent.com