const car1 = {
  brand: "Daewoo",
  model: "Matiz",
  year: 2001
};

const car2 = {
  brand: "Daewoo",
  model: "Nexia",
  owner: 2002
};

const car3 = {
  ...car1,
  ...car2
};

console.log(car3);
