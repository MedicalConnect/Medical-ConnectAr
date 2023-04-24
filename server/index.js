const server = require("./src/app.js");
const { connection } = require("./src/db.js");

connection.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at 3001`);
  });
});
