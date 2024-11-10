const user = { name: 'Tirion', age: 44 };

const data = { name: 'Tirion 2', age: 33 };
const keys = ['name', 'age'];
const fill = (user, keys, data) => {
  if (keys.length !== 0) {
    for (const key of keys) {
      user[key] = data[key];
    }
  } else { Object.assign(user, data); }
  return user;
};

console.log(fill(user, keys, data));
