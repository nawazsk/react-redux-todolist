let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const todolistFilter  = filter => ({
    type: 'SET_TODOLIST_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const setTodoListFilter = filter => ({
    type: 'SET_TODOLIST_FILTER',
    filter
})

export const todolistFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};