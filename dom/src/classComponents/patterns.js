import {
  recursiveMerge,
  toMacrotasksQueue
} from '../utils/utils';
import { template } from '../components/todo-list/todo-list-template';

const propertiesDescriptorPattern = {
  get() {
    return this._properties
  },

  set(newProperties) {

    this._properties = {
      ...this._properties,
      ...newProperties
    };

    const event = new CustomEvent("template-changed", {
      detail: { template: this.template() }
    })

    if (!this.ref._element) {
      setTimeout(() => {
        this.ref._element.dispatchEvent(event);
      }, 0);
    } else {
      this.ref._element.dispatchEvent(event);
    }
  },
}

const stylesDescriptorPattern = {
  get() {
    return this._styles;
  },

  set(newStyles) {

    this._styles = recursiveMerge(this._styles, newStyles);

    const event = new CustomEvent("styles-changed", {
      detail: { styles: this._styles }
    })

    if (!this.ref._element) {
      setTimeout(() => {
        this.ref._element.dispatchEvent(event);
      }, 0);
    } else {
      this.ref._element.dispatchEvent(event);
    }
  },
}


export {
  propertiesDescriptorPattern,
  stylesDescriptorPattern
}