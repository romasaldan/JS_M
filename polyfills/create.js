const create = (protoObject, descriptors) => {
  const newObj = {};
  Object.setPrototypeOf(newObj, protoObject);
  Object.defineProperties(newObj, descriptors);

  return newObj;
}

const b = {
  a: 3
}

console.log(create(b, {
  'property1' : {
  value : true,
  writable: true
  },
  'property2' : {
  value : 3.4 ,
  writable: false
  }
  }))