import { ALL_TODOS } from "./index.js";
import TodoItem from "./TodoItem.js";
import Mframe from "./Mframe/mframe.js";
import { getCurrentView } from "./utils.js";
export default function Todos() {
  const [state, setState] = Mframe.useState({
    newTodo: "",
    editing: null
  });
  const toggle = id => {
    ALL_TODOS[id].completed = !ALL_TODOS[id].completed;
    setState(state => state);
  };
  const edit = id => {
    setState(prevState => ({
      ...prevState,
      editing: id
    }));
  };
  const destroy = id => {
    delete ALL_TODOS[id];
    setState(state => state);
  };
  const cancel = () => {
    setState(prevState => ({
      ...prevState,
      editing: null
    }));
  };
  const save = (id, newTitle) => {
    ALL_TODOS[id].title = newTitle;
    setState(prevState => ({
      ...prevState,
      editing: null
    }));
  };
  let nowShowing = getCurrentView();
  let todoItems = Object.keys(ALL_TODOS).map(key => {
    if (nowShowing === "active") {
      if (ALL_TODOS[key].completed) {
        return;
      }
    } else if (nowShowing === "completed") {
      if (!ALL_TODOS[key].completed) {
        return;
      }
    }
    return Mframe.createElement(TodoItem, {
      key: key,
      todo: ALL_TODOS[key],
      onToggle: toggle,
      onEdit: edit,
      editing: state.editing === key,
      onDestroy: destroy,
      onCancel: cancel,
      onSave: save
    });
  });
  // Remove undefines
  todoItems = todoItems.filter(v => v);
  return Mframe.createElement("div", null, todoItems);
}