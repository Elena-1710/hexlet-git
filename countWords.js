import _ from 'lodash';

const text1 = 'one two three two ONE one wow';
const text2 = 'another one sentence with strange Words words';
const text3 = '';
const countWords = (text) => {
  const textLowerCase = text.toLowerCase();
  const textmassiv = _.words(textLowerCase);
  // console.log(textmassiv);
  const result = {};
  for (const name of textmassiv) {
    if (Object.hasOwn(result, name)) {
      result[name] = result[name] + 1;
    } else result[name] = 1;
  }
  return result;
};
console.log(countWords(text1));
