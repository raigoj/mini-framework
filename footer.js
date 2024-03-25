import Mframe from "./Mframe/mframe.js";
import { Route } from "./Mframe/mframe.js";
export default function TodoFooter(props) {
  return Mframe.createElement("footer", {
    className: "footer"
  }, Mframe.createElement("span", {
    className: "todo-count"
  }, Mframe.createElement("strong", null, props.count), " ", props.count === 1 ? "item" : "items", " left"), Mframe.createElement("ul", {
    className: "filters"
  }, Mframe.createElement("li", null, Mframe.createElement(Route, {
    href: "#/",
    className: "selected",
  }, "All")), " ", Mframe.createElement("li", null, Mframe.createElement(Route, {
    href: "#/active"
  }, "Active")), " ", Mframe.createElement("li", null, Mframe.createElement(Route, {
    href: "#/completed"
  }, "Completed"))), props.completedCount > 0 ? Mframe.createElement("button", {
    className: "clear-completed",
    onClick: props.onClearCompleted
  }, "Clear completed") : null);
}
/* 
MiniMe.createElement("ul", { className: "filters" },
                MiniMe.createElement("li", null,
                    MiniMe.createElement("a", { href: "#/", className: Router.currentRoute() == undefined ? "selected" : "" }, "All")),
                MiniMe.createElement("li", null,
                    MiniMe.createElement("a", { className: path == "#/active" ? "selected" : "", href: "#/active" }, "Active")),
                MiniMe.createElement("li", null,
                    MiniMe.createElement("a", { className: path == "#/completed" ? "selected" : "", href: "#/completed" }, "Completed"))),
            MiniMe.createElement("button", { style: todos.filter(todo => todo.isCompleted).length === 0 ? "display:none" : "", onclick: () => deleteTasks(), className: "clear-completed" }, "Clear completed")))); */