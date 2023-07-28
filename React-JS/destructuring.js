var arr = ["Javascript", "PHP", "Ruby"];
var a = arr[0],
  b = arr[1],
  c = arr[2];
console.log(a, b, c);
// Destructuring /rest
var [a, b, c] = arr; //destructuring: lay ra 3 ptu a b c
var [a, ...rest] = arr; //rest: lay ra phan tu con lai b c
console.log(a);
console.log(rest);

var course = {
  name: "JavaScripst",
  price: 1000,
  Image: "Image=address",
  children: {
    name: "ReactJS",
  },
};
var { name, price } = course;
console.log(name, price);

var { name, ...rest } = course;
console.log(rest);

var {
  name: parentName, // cach doi ten
  children: { name: childrenName }, // lay ra value khi object co object con
} = course;
console.log(childrenName, parentName);

function logger(...params) {
  console.log(params);
}
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));
