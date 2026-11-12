const users = [
  { name: "Сергей", email: "sergey@gmail.com", age: 50 },
  { name: "Ольга", email: "olga@gmail.com", age: 29 },
  { name: "Иван", email: "ivan@gmail.com", age: 33 }
];

for (const { name, email, age } of users) {
  console.log(`Имя: ${name}, Email: ${email}, Возраст: ${age}`);
}
