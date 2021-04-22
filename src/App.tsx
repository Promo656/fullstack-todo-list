import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import BoardsContainer from "./path/boardsContainer";
import TodoListsContainer from "./path/todoListsContainer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/:userId/boards" component={BoardsContainer}/>
                <Route exact path="/:boardId" component={TodoListsContainer}/>
                <Route exact path="/auth/login" component={SignIn}/>
                <Route exact path="/auth/registration" component={SignUp}/>
            </Switch>
            <ToastContainer autoClose={3005}/>
        </div>
    );
}

export default App;