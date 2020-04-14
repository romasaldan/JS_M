const create = (protoObject = null, descriptors) => {
  const newObj = {};
  Object.setPrototypeOf(newObj, protoObject);
  Object.defineProperties(newObj, descriptors);

  return newObj;
}

const b = {
  a: 3
}

const descriptor = {
  'property1' : {
    value : true,
    writable: true
  },
  'property2' : {
    value : 3.4 ,
    writable: false
  }
}

console.log(create(b, descriptor));
console.log(Object.create(b, descriptor));