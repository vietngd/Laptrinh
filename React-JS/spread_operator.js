function logger({ name, price, description }) {
  console.log(name, price, description);
}
logger({
  name: "JavaScript",
  price: 1000,
  description: "description content",
});

// Spread
var array1 = ["JavaScript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array1, ...array2];
console.log(array3);

var object1 = {
  name: "Javascript",
};
var object2 = {
  price: 1000,
};
var object3 = {
  ...object1,
  ...object2,
};
console.log(object3);

var defaultConfig = {
  api: "https://domain-trang-khoa-hoc",
  apiVersion: "v1",
  other: "other",
};
var exerciseConfig = {
  ...defaultConfig,
  api: "https://domain-trang-bai-tap",
};
console.log(exerciseConfig);

var array = ["JavaScript", "PHP", "Ruby"];

function logger(...rest) {
  for (i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logger(...array);
