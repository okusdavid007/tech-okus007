import path from "path";

let newPath = "C:UsersHPDesktopgithub.gitignore";
console.log(path.basename(newPath));
console.log(path.dirname(newPath));
console.log(path.extname(newPath));

console.log(path.join(__dirname, "index.ts"));

import fs from "fs";

try {
  const data = fs.readFileSync(path.join(__dirname, "ignore", "index.js"));
  console.log(data);
} catch (err) {
  console.log(Error);
}
fs.readFileSync(newPath);
