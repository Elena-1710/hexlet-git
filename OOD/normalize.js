/* eslint-disable guard-for-in */
const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: 'rusSiA' },
  { name: 'MoscoW', country: 'rusSiA' },
];

const normalize = (cities) => {
  const normalized = cities.map((city) => ({
    name: city.name.trim().toLowerCase(),
    country: city.country.trim().toLowerCase(),
  }));
  const grouped = normalized.reduce((acc, city) => {
    if (!acc[city.country]) {acc[city.country] = [];
    }
    acc[city.country].push(city.name);
    return acc;
  }, {});
  // eslint-disable-next-line no-restricted-syntax
  for (const country in grouped) {
    grouped[country] = [...new Set(grouped[country])].sort();
  }
  return grouped;
}

console.log(normalize(countries))