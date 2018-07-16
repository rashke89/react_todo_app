import React from 'react';

/**CREATE TO DO COMPONENT*/
export default class CreateTodo extends React.Component {

    /**CONSTRUCTOR*/
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        /**BIND METHODS*/
        this.handleCreate = this.handleCreate.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    /**RENDER*/
    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" placeholder="What I need to do?" ref="createInput"/>
                <button>Save</button>
                {this.renderError()}
            </form>

        )
    }

    /**RENDER ERROR*/
    renderError() {
        if (!this.state.error) return null;

        return <div style={{color: 'red'}}>{this.state.error}</div>;
    }

    /**CREATE TASK*/
    handleCreate(event) {
        event.preventDefault();

        let new_task = this.refs.createInput.value;
        let validate_input = this.validateInput(new_task);

        if (validate_input)
            this.setState({
                error: validate_input
            });
        else {
            this.setState({error: null});
                this.props.createTask(new_task);
                this.refs.createInput.value = '';
        }
    }

    /**VALIDATE NEW TASK*/
    validateInput(task) {
        if (!task)
            return 'Please enter a task.';
        else if (this.props.todo_list.findIndex(item => item.task == task) !== -1)
            return 'Task already exist.';
        else
            return null;
    }
}