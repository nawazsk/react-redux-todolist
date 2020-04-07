import React from 'react';
import FilterLink from './FilterLink';
import {todolistFilters} from '../actions';

const Filters = () => {

    return (
        <div>
            <span>Show:</span>
            <FilterLink filter={todolistFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    )
}

export default Filters;