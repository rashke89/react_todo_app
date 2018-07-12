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
        this.onEditClick = this.onEditClick.bind(this);
    }

    /**RENDER*/
    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                {this.renderActionSection()}
            </tr>
        )
    }

    /**CHANGE BUTTONS*/
    renderActionSection() {
        if(this.state.is_editing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onEditClick}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
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
        console.log(this.state.is_editing);
        this.setState({
            is_editing: !this.state.is_editing
        });
        console.log(this.state.is_editing);
    }
}