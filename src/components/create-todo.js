import React from 'react';

/**CREATE TO DO COMPONENT*/
export default class CreateTodo extends React.Component {

    /**RENDER*/
    render() {
        return (
            <form >
                <input type="text" placeholder="What I need to do?"/>
                <button>Save</button>
            </form>
        )
    }
}