import { Element } from '../../classComponents';
import { _styles } from './todo-header-styles';
import { template } from './todo-header-template';

const headerDescriptor = {
  name: 'todo-header',
  template,
  _styles,
  _properties: {
    header: 'Todo list'
  }
}

const headerElement = new Element(headerDescriptor);

export {
  _styles,
  template,
  headerElement
}