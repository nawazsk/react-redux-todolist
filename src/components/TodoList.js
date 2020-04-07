import React from 'react';
import { connect } from 'react-redux';
import { 
    todolistFilters,
    toggleTodo
 } from '../actions';

const getTodoList = (todos, filter) => {
    switch(filter) {
        case todolistFilters.SHOW_ALL:
            return todos;
        case todolistFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case todolistFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default: 
            throw new Error('unknown filter' +filter);            
    }
}

const mapStateToProps = state => {
    return ({
         todos: getTodoList(state.todos, state.todolistFilter) 
    })
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div>
            <ul>{
                    todos.map((todo) => (
                        <li 
                            onClick={() => toggleTodo(todo.id)} 
                            key={todo.id}
                            style={{textDecoration: todo.completed ? 'line-through': 'none'}}
                        >
                            
                            {todo.text}
                        </li>
                    ))
            }
                
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);