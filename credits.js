import Mframe from "./Mframe/mframe.js";

export default function Credits() {
    return (Mframe.createElement("footer", { className: "info" }, 
    Mframe.createElement("p", null, "Double-click to edit a todo"),
    Mframe.createElement("p", null, "Written by ", Mframe.createElement("a", { href: "http://twitter.com" }, "Luke Skywalker")),
    Mframe.createElement("p", null, "Refactored by ", Mframe.createElement("a", { href: "https://github.com" }, "Luther Martin King")),
    Mframe.createElement("p", null, "Part of ", Mframe.createElement("a", { href: "http://todomvc.com" }, "TodoMVC"))))
}
/* export const Footer = () => {
    return (MiniMe.createElement("footer", { className: "info" },
        MiniMe.createElement("p", null, "Double-click to edit a todo"),
        MiniMe.createElement("p", null,
            "Written by ",
            MiniMe.createElement("a", { href: "http://twitter.com/lukeed05" }, "Luke Edwards")),
        MiniMe.createElement("p", null,
            "Refactored by ",
            MiniMe.createElement("a", { href: "https://github.com/xorgy" }, "Aaron Muir Hamilton")),
        MiniMe.createElement("p", null,
            "Part of ",
            MiniMe.createElement("a", { href: "http://todomvc.com" }, "TodoMVC"))));
}; */