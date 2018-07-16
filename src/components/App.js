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
        };

        /**BIND METHODS*/
        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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
                <CreateTodo
                    createTask={this.createTask}
                    todo_list={this.state.todo_list}
                />

                {/*TABLE*/}
                <div className="todo-table">
                    <TodoList
                        todo={this.state.todo_list}
                        toggleTask={this.toggleTask}
                        saveTask={this.saveTask}
                        deleteTask={this.deleteTask}
                    />
                </div>
            </div>
        );
    }

    /**CREATE TASK*/
    createTask(task) {
        this.state.todo_list.push({
            task,
            is_done: false
        });

        this.setState({
            todo_list: this.state.todo_list
        });
    }

    /**TOGGLE TASK*/
    toggleTask(task) {
        const find_task = this.state.todo_list.find((todo) => todo.task == task);

        find_task && (find_task.is_done = !find_task.is_done,
            this.setState({
                todo_list: this.state.todo_list
            }));
    }

    /**EDIT TASK*/
    saveTask(old_task, new_task) {
        let find_task = this.state.todo_list.find((todo) => todo.task == old_task);
        find_task && (find_task.task = new_task,
            this.setState({
                todo_list: this.state.todo_list
            }));
    }

    /**DELETE TASK*/
    deleteTask(task_to_delete) {
        let task_index = this.state.todo_list.findIndex(task => task.task == task_to_delete);

        task_index != -1 && (this.state.todo_list.splice(task_index, 1),
            this.setState({
                todo_list: this.state.todo_list
            }));
    }
}