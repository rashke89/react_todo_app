import React from 'react';

/**IMPORT COMPONENTS*/
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';

/**TO DO LIST COMPONENT*/
export default class Todolist extends React.Component {

    /**RENDER ITEMS*/
    renderItems() {
        return this.props.todo.map((todo, index) => <TodoListItem key={index} {...todo}/>)
    }

    /**RENDER*/
    render() {
        console.log(this.props.todo);
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}