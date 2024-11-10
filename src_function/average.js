import _ from 'lodash';

const average = (...numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  const result = _.sum(numbers);
  const aver = result / numbers.length;
  return aver;
};

console.log(average(1, 4, 5, 8));

