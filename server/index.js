const server = require("./src/app.js");
const { connection } = require("./src/db.js");

connection.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at 3001`);
  });
});
