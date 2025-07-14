const protectedProps = ['password'];
const protect = (obj, protectedProps) => new Proxy(obj, {
  get(target, prop) {
    if (protectedProps.includes()) {
      throw new Error(`Acces to '${prop}' is restricted`);
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (protectedProps.includes()) {
      throw new Error(`Acces to '${prop}' is restricted`);
    }
    // eslint-disable-next-line no-return-assign
     target[prop] = value;
     return true;
  },
});

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};



const protectedUser = protect(user, protectedProps);

console.log(protectedUser.name); // John
console.log(protectedUser.age);
console.log(protectedUser.password)
try {
  console.log(protectedUser.password); // Должно выбросить ошибку
} catch (err) {
  console.log(err.message); // Access to 'password' is restricted
}