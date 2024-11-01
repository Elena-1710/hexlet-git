const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};
const setKey = ['user', 'cores'];

const result = {};
// eslint-disable-next-line no-restricted-syntax
for (const key of setKey) {
  if (Object.hasOwn(data, key)) {
    result[key] = data[key];
  };
}
console.log(result);

// функция
/* const pick = (obj, keys) => {
        const newobj = {};
        for (const key of keys)  {
            if (Object.hasOwn(obj, key)) {newobj[key]=obj[key]
          }
        }

        return newobj;};
        export default pick; */
