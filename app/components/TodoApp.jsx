import React, {Component} from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk with cat'
                },
                {
                    id: 2,
                    text: 'Beresin Rumah'
                }
            ]
        }
    }

    render() {
        const {todos} = this.state;
        return(
            <div>
                <TodoList todos = {todos} />
            </div>
        )
    }
}

export default TodoApp;