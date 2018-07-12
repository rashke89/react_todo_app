import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

/**IMPORT COMPONENTS*/
import TodoList from './todo-list';
import CreateTodo from './create-todo';

/**TO DO LIST*/
const todo_list = [
    {
        task: 'Walk a dog',
        is_done: true
    },
    {
        task: 'Go into shopping',
        is_done: false
    }
];

/**ROOT APP COMPONENT*/
export default class App extends Component {

    /**CONSTRUCTOR*/
    constructor(props) {
        super(props);

        this.state = {
            todo_list
        }
    }
    /**RENDER*/
    render() {
        return (
            <div className="App">

                {/*HEADER*/}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h1>To Do App</h1>

                {/*CREATE TODO*/}
                <CreateTodo />

                {/*TABLE*/}
                <div className="todo-table">
                    <TodoList todo={this.state.todo_list} />
                </div>
            </div>
        );
    }
}