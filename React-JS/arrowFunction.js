// 1. Định nghĩa key value cho object
// 2. định nghĩa method cho object
// 3. Dịnh nghĩa key cho object dưới dạng biến
//(ngắn gọn hơn)
var names = "JavaScript";
var prices = 1000;
var fieldName = "new-name";
var fieldPrice = "new-price";
var courses = {
  [fieldName]: "PHP",
  [fieldPrice]: 2000,
  names,
  prices,
  getName() {
    return names;
  },
};
console.log(courses);
