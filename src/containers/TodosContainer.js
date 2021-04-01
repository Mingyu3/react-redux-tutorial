import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, remove, toggle } from '../modules/todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: () => dispatch(changeInput()),
  insert: () => dispatch(insert()),
  toggle: () => dispatch(toggle()),
  remove: () => dispatch(remove()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);