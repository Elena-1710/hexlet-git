import _ from 'lodash';

const filepath = '/path/to/index.js';

// Инициализация объекта
const info = {};

const parts = filepath.split('/');
console.log(parts);
const filename = _.last(parts);
info.filename = filename;

const extension = _.last(filename.split('.'));
info.extension = extension;

console.log(info);
