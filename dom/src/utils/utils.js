
function fromObjectToStyles (obj) {
  let styles = '';

  for (const selector in obj) {
    if (obj.hasOwnProperty(selector)) {
      styles += selector + '{';
      for (const prop in obj[selector]) {
        if (obj[selector].hasOwnProperty(prop)) {
          styles += prop + ':' + obj[selector][prop] + ';';
        }
      }
      
      styles += '}';
    }
  }

  return styles;
}

function recursiveMerge(obj1, obj2)  {
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if(!obj1[key] || typeof obj1[key] !== 'object') {
        obj1[key] = obj2[key]
      };

      if (typeof obj2[key] === 'object' && obj2[key]) {
        recursiveMerge(obj1[key], obj2[key])
      } else {
        obj1[key] = obj2[key];
      }
    }
  }

  return obj1;
}

const removeFromArray = (array, index) => array.filter((el, i) => index !== i);

const toMacrotasksQueue = func => {
  setTimeout(func, 0);
}

export {
  recursiveMerge,
  fromObjectToStyles,
  removeFromArray,
  toMacrotasksQueue
}