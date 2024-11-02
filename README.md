## normalize.js

Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. То есть приводит их к определенному виду. Нормализация происходит путём изменения исходного объекта.

На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся два поля: имя и описание.

const lesson = {
  name: 'Деструктуризация',
  description: 'как удивить друзей',
};
У некоторых уроков имя и описание могут быть в разном регистре. Такое случается при вводе данных:

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ друзей',
};
Наша функция должна обновлять содержимое урока по следующим правилам:

Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
Весь текст описания приводится к нижнему регистру.
import normalize from './normalize.js';

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ друзей',
};

// Обратите внимание, что не используется возврат.
// Объекты, как и массивы, передаются по ссылке.
// Изменение переданного объекта внутри отражается на самом объекте:
normalize(lesson);

console.log(lesson);
// {
//   name: 'Деструктуризация',
//   description: 'как удивить друзей'
// }

_________________________________________________
## is.js
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, website.

import is from './company.js';

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true
______________________________________________________
## getDomainInfo
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:

import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }
_______________________________________________
## countWords
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект. В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.

import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект 
countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text1);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text2);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
Подсказки
Для формирования массива слов поможет функция _.words
toLowerCase – приведение к нижнему регистру

----

## pick.js
Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. Параметры:

Исходный объект
Массив имен свойств
import pick from './objects.js';

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }

pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }

pick(data, []); // {}

// Если такого свойства нет в исходных данных,
// то оно игнорируется 
pick(data, ['none', 'cores']); // { cores: 4 }
Такая функция есть в lodash, но вам необходимо её реализовать самостоятельно.

----

## objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей, которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.

import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
Попробуйте решить эту задачу с помощью слияния.

Подсказки
_.pick()

----

## make.js
Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:

Имя (обязательно)
Объект с дополнительными свойствами (если они есть)
Также, кроме имени, у компаний есть два свойства со значениями по умолчанию. Если значение этих свойств не передано при создании, то они принимают следующие значения:

state – moderating
createdAt – текущая дата (в формате Unix-времени. Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года)
import make from '../company.js';

 Дополнительные свойства не переданы
const company = make('Hexlet');
 {
   name: 'Hexlet',
 state: 'moderating',
   createdAt: <тут текущая дата>
 }

 Передаем дополнительные свойства
const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
{
 name: 'Hexlet',
website: 'hexlet.io',
state: 'published',
createdAt: <тут текущая дата>
}
Используйте спред-оператор для слияния данных внутри и возврата нового объекта.

Подсказки
Для получения текущей даты в формате Unix-времени используйте метод Date.now()