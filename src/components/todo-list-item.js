import React from 'react';

/**TO DO LIST ITEM COMPONENT*/
export default class TodoListItem extends React.Component {

    /**CONSTRUCTOR*/
    constructor(props) {
        super(props);

        /**STATE*/
        this.state = {
            is_editing: false
        };

        /**BIND METHODS*/
        this.onEditClick = this.onEditClick.bind(this);
        this.renderActionSection = this.renderActionSection.bind(this);
        this.renderTaskSection = this.renderTaskSection.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    /**RENDER*/
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        )
    }

    /**RENDER BUTTONS*/
    renderActionSection() {
        if (this.state.is_editing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onEditClick}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        )
    }

    /**RENDER TASKS*/
    renderTaskSection() {
        let {task, is_done} = this.props;
        let text_style = {
            color: is_done ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.is_editing){
            return (
                <td>
                    <form onSubmit={this.onSaveClick}>
                        <input type="text" defaultValue={task} ref="editInput"/>
                    </form>
                </td>
            )
        }

        return (
            <td style={text_style}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        )
    }

    /**EDIT TASK*/
    onEditClick() {
        this.setState({
            is_editing: !this.state.is_editing
        })
    }

    /**CANCEL EDIT*/
    onCancelClick() {
        this.setState({
            is_editing: !this.state.is_editing
        });
    }

    /**SAVE EDITED TASK*/
    onSaveClick(event) {
        event.preventDefault();

        let old_task = this.props.task;
        let new_task = this.refs.editInput.value;

        if(old_task && new_task) {
            this.props.saveTask(old_task, new_task);
            this.setState({
                is_editing: !this.state.is_editing
            })
        }
    }
}