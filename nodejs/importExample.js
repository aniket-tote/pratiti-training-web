// const math = require("./exportFun");

// console.log(math.add(2, 3));
// console.log(math.sub(2, 1));

const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
