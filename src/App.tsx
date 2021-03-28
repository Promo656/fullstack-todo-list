import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import BoardsContainer from "./path/boardsContainer";
import TodoListsContainer from "./path/todoListsContainer";

function App(props: any) {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/:userId/boards" component={BoardsContainer}/>
                <Route path="/:boardId" component={TodoListsContainer}/>
            </Switch>
        </div>
    );
}

export default App;