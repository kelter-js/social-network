const deepClone = (obj) => {
  let result = Object.create(obj, Object.getOwnPropertyDescriptors(obj));

  Object.entries(obj).map(([key, value]) => {
    if (!Array.isArray(value) && typeof value === 'object' && value !== null) {
      result[key] = deepClone(value);
    } else if (Array.isArray(value)) {
      result[key] = [...value];
    }
  });

  return result;
};

export default deepClone;
