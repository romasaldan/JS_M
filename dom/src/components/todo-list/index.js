import { Element } from '../../classComponents';
import { template } from './todo-list-template';
import { _styles } from './todo-list-styles';
import { removeFromArray } from '../../utils/utils';

const clojures = {
  lastValue: '' 
}

const todoListDescriptor = {
  name: 'todo-list',
  template,
  attr: {
    id: 'todo-list',
  },
  _styles,
  _properties: {
    todoList: [],
  },

  defineListeners() {
    const closeButtons = document.getElementsByClassName('todo-list-close');
    const itemsText = document.getElementsByClassName('todo-list-item');
    const inpuField = document.getElementById('todo-list-input');
    const button = document.getElementById('todo-list-button');

    button.addEventListener('click', (e) => onButtonPressed(e, inpuField.value))

    for (let index = 0; index < closeButtons.length; index++) {
      itemsText[index].addEventListener('click', e => onEditPress(e, index))
      closeButtons[index].addEventListener('click',e => onPressedDelete(e, index));
    }
  },

  onCreated() {},

  onUpdated() {}
}

export const todoListElement = new Element(todoListDescriptor);

function onPressedDelete(e, index) {
  todoListDescriptor.properties = {todoList: removeFromArray(todoListDescriptor.properties.todoList, index)};
};

function onButtonPressed(e, value) {
  const button = document.getElementById('todo-list-button');

  switch (button.innerHTML) {
    case 'Press to add':
      addNewItem(e, value);
      break;
    case 'Edit items':
      editItems(e, value);
      break;
  }
}

function addNewItem(event, value) {
  todoListDescriptor.properties = {todoList: [...todoListDescriptor.properties.todoList, value]};
}

function onEditPress(e, index) {
  const button = document.getElementById('todo-list-button');
  button.innerHTML = 'Edit items';
  const inpuField = document.getElementById('todo-list-input');
  inpuField.value = todoListDescriptor.properties.todoList[index];
  clojures.lastValue = inpuField.value;
};

function editItems(e, value) {
  const newArr = todoListDescriptor.properties.todoList.map(
    (el, i) => {
      const itemsText = document.getElementsByClassName('todo-list-item');

      if (el === clojures.lastValue) {
        todoListDescriptor.styles = { [`todo-list ul li:nth-child(${i + 3})`] : {'color': 'blue'}}
        setTimeout(() => {
          todoListDescriptor.styles = { [`todo-list ul li:nth-child(${i + 3})`] : {'color': 'black'}}          
        }, 2000);

        return value;
      }

      return el;
    }
  );

  todoListDescriptor.properties = {todoList: newArr};
}
