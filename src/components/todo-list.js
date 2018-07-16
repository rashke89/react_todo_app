import React from 'react';

/**IMPORT COMPONENTS*/
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';

/**TO DO LIST COMPONENT*/
export default class Todolist extends React.Component {

    /**RENDER ITEMS*/
    renderItems() {
        let props = Object.assign({}, this.props);

        return this.props.todo.map((todo, index) => <TodoListItem key={index} {...todo} {...props}/>)
    }

    /**RENDER*/
    render() {
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