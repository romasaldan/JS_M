
export const template = function() {
  return `<ul>
    <input id="todo-list-input" type='text' placeholder="enter task">
    <button id="todo-list-button" type='button'>Press to add</button>
    ${this._properties.todoList.reduce((acc, cur, index) => {

      return acc += `
        <li>
          <span class='todo-list-item'>${index + 1}) ${cur}</span>
          <span class='todo-list-close'>X</span>
        </li>`;
    },'')}
  </ul>`;
}