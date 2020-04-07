import { combineReducers } from 'redux';
import { todolistFilters } from './actions';

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id) ? 
                {...todo, completed: !todo.completed}: 
                todo
            )   
        default : return state;    
    }
}

const todolistFilter = (state=todolistFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_TODOLIST_FILTER':
            return action.filter;
        default: return state;    
    }
}

export default combineReducers({
    todos,
    todolistFilter
});