// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(() => new Date()), // значение по умолчанию
});

const data = {
  name: 'jimmy',
  age: -24,
};

try {
  schema.validateSync(data);
} catch (err) {
  console.log(err.message); // "age must be a positive number"
}
const result = schema.validateSync(data);
console.log(result);