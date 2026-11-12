const person = {
  firstName: "Сергей",
  lastName: "Ковалёв",
  age: 50
};

person.email = "serhii.kovaliov@example.com";
delete person.age;

console.log(person);
