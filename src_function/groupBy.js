const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
  ];
  
  const student1 = [];
  const groupBy = (array, property) => array.reduce((acc, arr) => {
    const key = arr[property];
    if (!Object.hasOwn(acc, key)) {
      acc[key] = [];
    }
    acc[key].push(arr);
    return acc;
  }, {});
  console.log(groupBy(student1, ''));
