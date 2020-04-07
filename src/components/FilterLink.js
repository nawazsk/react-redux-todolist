import React from 'react';
import { connect } from 'react-redux';
import { setTodoListFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todolistFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setTodoListFilter(ownProps.filter))
})

const FilterLink = ({active, children, onClick}) => {
    return (
        <button
            onClick ={onClick}
            disabled={active}
            style={{marginLeft:'4px'}}
        >
            {children}
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);