console.log('launching index.js')
const Application = require("./Application");
console.log('required application');
let app = new Application();
console.log('created application');
app.prepareUI();