// Callback
// la ham duoc truyen qua doi so
// khi goi ham khac

// 1. La ham
// 2. Duoc truyen qua doi so

function myFunction(param) {
  if (typeof param === "function") {
    param("Hoc lap trinh");
  }
}
function myCallback(value) {
  console.log("value: ", value);
}

myFunction(myCallback);
