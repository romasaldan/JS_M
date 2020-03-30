import { Element } from './classComponents';
import { headerElement } from './components/header';
import { container as containerDescriptor } from './components/container';
import { todoListElement } from './components/todo-list';

const containerElement = new Element({...containerDescriptor, ...{attr: {id: 'todo-container'}}});
containerElement.attachElem('root');

headerElement.attachElem(containerElement.attr.id);
todoListElement.attachElem(containerElement.attr.id);

