import React, {Component} from 'react';

class Todo extends Component {
    render() {
        const {text} = this.props;
        return(
            <div>
                {text}
            </div>
        )
    }
}

export default Todo;