//const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
//const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const is = (company1, company2) => {
  const keys1 = Object.keys(company1);
  const keys2 = Object.keys(company2);
  
  if (keys1.length !== keys1.length) {
    return false;
  }
  for (const key in company1) {
    if (company1[key]!== company2[key]) {
      return false
    }
  } return true;
  
}
 export default is