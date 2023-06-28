export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findObjectById = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndex = (idWithUnknownIndex, array) => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknownIndex
  );
};

export const removeObjectById = (idOfitemToRemove, array) => {
  return array.filter((item) => item.id !== idOfitemToRemove);
};

export const isEmpty = (array) => {
  return array.length === 0;
};
