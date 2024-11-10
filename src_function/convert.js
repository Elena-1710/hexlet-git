const convert = (...dates) => {
  if (dates.lengs === 0) {
    return [];
  };
  const readableDates = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const datArray of dates) {
    const date = new Date(datArray[0], datArray[1] - 1, datArray[2]);
    readableDates.push(date.toDateString());
  } return readableDates;
};
console.log(convert([2005, 4, 3], [2004, 3, 5]));