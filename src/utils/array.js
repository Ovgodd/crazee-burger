export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};
export const isEmpty = (array) => {
  return array.length === 0;
};
