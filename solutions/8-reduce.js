const groupBy = (objects, key) => objects.reduce((acc, obj) => {
  const group = obj[key];
  if (!acc[group]) {
    acc[group] = [];
  }
  acc[group].push(obj);
  return acc;
}, {});

export default groupBy;