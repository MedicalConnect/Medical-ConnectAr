const server = require("./src/app.js");
const { connection } = require("./src/db.js");

const PORT = process.env.PORT || 3001;

connection.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
