
export function classNames(classNamesObject) {
  const classNamesArray = [];
  for (const className in classNamesObject) {
    if (classNamesObject[className]) {
      classNamesArray.push(className);
    }
  }
  console.log("classnames; ", classNamesArray)
  return classNamesArray.join(" ");
}
export function getCurrentView() {
  let nowShowing = window.location.hash;
  switch (nowShowing) {
    case "#/active":
      nowShowing = "active";
      break;
    case "#/completed":
      nowShowing = "completed";
      break;
    default:
      nowShowing = "all";
  }
  return nowShowing;
}