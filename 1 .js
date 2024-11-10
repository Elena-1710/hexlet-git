const users = [
    { name: 'Igor', amount: 19 },
    { name: 'Danil', amount: 1 },
    { name: 'Ivan', amount: 4 },
    { name: 'Matvey', amount: 16 },
  ];
let sum = 0;
for (const user of users) {
    sum = sum + user.amount;
}
console.log(sum)