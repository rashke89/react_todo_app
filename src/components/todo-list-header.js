import React from 'react';

/**TO DO LIST HEADER COMPONENT*/
export default class TodoListHeader extends React.Component {

    /**RENDER*/
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
}