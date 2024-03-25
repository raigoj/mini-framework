import { classNames } from "./utils.js";
import Mframe from "./Mframe/mframe.js";
export default function TodoItem({
  key,
  todo,
  onToggle,
  onEdit,
  onDestroy,
  onCancel,
  onSave,
  editing
}) {
  const handleToggle = () => {
    onToggle(key);
  };
  const handleEdit = () => {
    onEdit(key);
  };
  const handleDestroy = () => {
    onDestroy(key);
  };
  const handleSubmit = event => {
    if (!editing) {
      return;
    }
    if (event.keyCode === 27) {
      onCancel();
      event.target.value = todo.title;
    } else if (event.keyCode === 13 || event.keyCode === undefined) {
      let newTitle = event.target.value.trim();
      if (newTitle) {
        onSave(key, newTitle);
      } else {
        handleDestroy();
      }
    } else {
      return;
    }
  };
  return Mframe.createElement("li", {
    className: classNames({
      completed: todo.completed,
      editing: editing
    })
  }, Mframe.createElement("div", {
    className: "view"
  }, Mframe.createElement("input", {
    className: "toggle",
    type: "checkbox",
    checked: todo.completed,
    onChange: handleToggle
  }), Mframe.createElement("label", {
    onDblClick: handleEdit
  }, todo.title), Mframe.createElement("button", {
    className: "destroy",
    onclick: handleDestroy
  })), Mframe.createElement("input", {
    className: "edit",
    value: todo.title,
    onBlur: handleSubmit,
    onKeyDown: handleSubmit
  }));
}