import _ from 'lodash';

const filepath = 'google.com';
const getDomainInfo = () => {
  const parts = filepath.split('://');
  const name = _.last(parts);
  const scheme = parts.length > 1 ? parts[0] : 'http';
  const info = { name, scheme };
  return info;
};
console.log(getDomainInfo(filepath));
