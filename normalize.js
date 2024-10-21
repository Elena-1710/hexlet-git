/* eslint-disable no-param-reassign */
import _ from 'lodash';

const obj = { name: 'ДеСТРУКтуриЗАция', description: 'КАК удивить ДРУЗЕЙ?' };
const normalize() {
  obj.name = _.capitalize(obj.name);
  // eslint-disable-next-line no-param-reassign
  obj.description = obj.description.toLowerCase();
}
normalize(obj);
console.log(obj);
