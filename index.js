const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
    },
  },
};

export default function findKey(obj, keys) {
  let result = obj;
  for (const key of keys) {
    if (Object.hasOwn(result, key) === false) {
      return null;
    }
    result = result[key];
  } return result;
}
console.log(findKey(data, ['hosts', 1]));
