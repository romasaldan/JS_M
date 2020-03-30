import { fromObjectToStyles } from '../utils/utils';
import {
  stylesDescriptorPattern,
  propertiesDescriptorPattern
} from './patterns';

export class Element {
  constructor(description) {
    this.name = description.name;
    this._uniqueId = Symbol('id');
    this.attr = description.attr || {};
    this.template = description.template();
    this.styles = description._styles;
    this.onCreated = description.onCreated;
    this.onUpdated = description.onUpdated;
    this.defineListeners = description.defineListeners;
    this.listeners = description.listeners;
    description.ref = this;
    Object.defineProperty(description, 'properties', propertiesDescriptorPattern)
    Object.defineProperty(description, 'styles', stylesDescriptorPattern)
  }

  _onTemplateChanged(event) {
    this._element.innerHTML = event.detail.template;
    
    if (this.onUpdated) {
      this.onUpdated();
    }

    if (this.defineListeners) {
      this.defineListeners();
    }
  }

  _initializeStyles() {
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.uniqueId = this._uniqueId;
    style.innerHTML = fromObjectToStyles(this.styles);
    head.append(style)
  }

  _updateStyles(event) {
    const head = document.getElementsByTagName('head')[0];
    this.styles = event.detail.styles;
    const style = [...head.getElementsByTagName('style')].find(el => el.uniqueId === this._uniqueId);
    style.innerHTML = fromObjectToStyles(this.styles);
    head.append(style)
  }

  _createElement() {
    this._element = document.createElement(this.name);
    for (const key in this.attr) {
      if (this.attr.hasOwnProperty(key)) {
        this._element.setAttribute(key, this.attr[key])
      }
    }

    this._initializeStyles()
    this._element.addEventListener('template-changed', this._onTemplateChanged.bind(this), false);
    this._element.addEventListener('styles-changed', this._updateStyles, false);
  }

  _renderElem() {
    this._createElement(this.name);

    this._element.innerHTML = this.template;

  };

  attachElem(selectorParentId) {
    this._renderElem();
    const parentElement = document.getElementById(selectorParentId);
    this._element._uniqueId = this._uniqueId;
    parentElement.append(this._element);

    if (this.onCreated) {
      this.onCreated();
    }

    if (this.defineListeners) {
      this.defineListeners();
    }
  };

  removeElement() {
    this._element.parentNode.removeChild(this._element);
  };
}

