import yup from 'yup';

const genres = ['drama', 'honor', 'fantasy', 'classic'];

const bookSchema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive().integer().notRequired(),
  link: yup.string().url().notRequired().min(1),
  genre: yup.string().oneOf(genres).notRequired(),
});

const getInvalidBooks = (books) => books.filter((book) => {
  try {
    bookSchema.validateSync(book, { strick: true });
    return false;
  } catch (err) {
    return true;npm i -S yup
  }
});

const books = [
  { name: 'book', author: 'author' }, // Валидная книга
  { author: 'author 2' }, // Невалидная (отсутствует name)
  { name: 'book 3', author: 'author 3', pagesCount: -100 }, // Невалидная (pagesCount отрицательное)
  { name: 'book 4', author: 'author 4', link: '' }, // Невалидная (link пустая строка)
  { name: 'book 5', author: 'author 5', genre: 'comedy' }, // Невалидная (genre не из списка)
];
const invalidBooks = getInvalidBooks(books);
console.log(invalidBooks);
