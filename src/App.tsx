import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Boards from "./path/boards";
import Board from "./path/board";
import Navbar from "./components/navbar/navbar";

function App(props: any) {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/:userId/boards" component={Boards}/>
                <Route path="/:boardId" component={Board}/>
            </Switch>
        </div>
    );
}

export default App;