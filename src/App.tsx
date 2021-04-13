import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import BoardsContainer from "./path/boardsContainer";
import TodoListsContainer from "./path/todoListsContainer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/:userId/boards" component={BoardsContainer}/>
                <Route path="/:boardId" component={TodoListsContainer}/>
            </Switch>
            <ToastContainer autoClose={3005}/>
        </div>
    );
}

export default App;