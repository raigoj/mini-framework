import Mframe from "./Mframe/mframe.js";
import { ALL_TODOS } from "./index.js";
function uuid() {
  let uuid = '', i, random;  
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }
  return uuid;
}
export default function CreateTodo() {
  const [state, setState] = Mframe.useState({
    newTodo: ""
  });
  const onInput = event => {
    setState(prevState => ({
      ...prevState,
      newTodo: event.target.value
    }));
  };
  const onEnter = event => {
    if (event.keyCode !== 13) {
      return;
    }
    let todoTitle = state.newTodo.trim();
    if (todoTitle) {
      ALL_TODOS[uuid()] = {
        title: todoTitle,
        completed: false
      };
    }
    setState(state => {
      state.newTodo = "";
      return state;
    });
  };
  return Mframe.createElement("input", {
    className: "new-todo",
    placeholder: "What needs to be done?",
    value: state.newTodo,
    onInput: onInput,
    onKeyDown: onEnter,
    autofocus: true
  });
}