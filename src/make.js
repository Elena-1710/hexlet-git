onst additionalProperty = { website: 'hexlet.io', state: 'published' };
// eslint-disable-next-line no-shadow
const make = (name, additionalProperty = {}) => {
  if (!name) {
    throw new Error('Имя компании обязательно');
  }

  const defaulProperties = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  const company = { name, ...defaulProperties, ...additionalProperty };
  return company;
};
console.log(make('h', additionalProperty));
