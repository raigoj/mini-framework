import Mframe from "./Mframe/mframe.js";
import TodoFooter from "./footer.js";
import Todos from "./Todos.js";
import Credits  from "./credits.js";
import CreateTodo from "./CreateTodo.js";
export let ALL_TODOS = {};
function App() {
  let main;
  let footer;

  // Needed for component refresh
  const [_, setState] = Mframe.useState({});

  // TODO: Create onMount for Mframe. Currently doesn't work.
  // setState((prevState) => {
  //   // TODO: set nowShowing depending on route
  //   prevState.nowShowing = ALL_TODOS;
  //   return prevState;
  // })

  let activeTodoCount = Object.keys(ALL_TODOS).reduce(function (accum, key) {
    return ALL_TODOS[key].completed ? accum : accum + 1;
  }, 0);
  let completedCount = Object.keys(ALL_TODOS).length - activeTodoCount;
  function clearCompleted() {
    Object.keys(ALL_TODOS).forEach(key => {
      if (ALL_TODOS[key].completed) {
        delete ALL_TODOS[key];
      }
    });
    // Dirty way to force a component refresh
    setState(state => state);
  }
  function toggleAll(event) {
    // When pressing the input label, change all todos to completed
    Object.keys(ALL_TODOS).forEach(key => {
      ALL_TODOS[key].completed = event.target.checked;
    });
    setState(state => state);
  }

  // TODO: Determine this from URL hash
  if (activeTodoCount || completedCount) {
    footer = Mframe.createElement(TodoFooter, {
      count: activeTodoCount,
      completedCount: completedCount,
      onClearCompleted: clearCompleted
    });
  }
  if (Object.keys(ALL_TODOS).length) {
    main = Mframe.createElement("section", {
      className: "main"
    }, Mframe.createElement("input", {
      type: "checkbox",
      className: "toggle-all",
      id: "toggle-all",
      onChange: toggleAll,
      checked: activeTodoCount === 0
    }), Mframe.createElement("label", {
      htmlFor: "toggle-all"
    }), Mframe.createElement("ul", {
      className: "todo-list"
    }, Mframe.createElement(Todos, null)));
  }
  console.log("footer: ", footer)
  return Mframe.createElement("div", null, Mframe.createElement("section", {className: "todoapp"}, Mframe.createElement("header", {
    className: "header"
  }, Mframe.createElement("h1", null, "todos"), Mframe.createElement(CreateTodo, null)), main, footer), Mframe.createElement(Credits, null));
}
Mframe.setupRoutes({
  '/': Todos,
  '#/': Todos,
  '#/active': Todos,
  '#/completed': Todos
});
let app = document.body
Mframe.render(Mframe.createElement(App, null), app);