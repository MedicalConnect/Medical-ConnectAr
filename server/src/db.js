require('dotenv').config();
const { Sequelize } = require('sequelize');
const AModel = require('./models/A')
const {
    DB_USER, DB_PASSWORD, DB_HOST,DB_NAME
  } = process.env;

  const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

// const fs = require('fs');
// const path = require('path');

// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// hace es leer todos los archivos de la carpeta models que tengan extensión .js y no sean el archivo actual (basename). Luego, para cada archivo que cumpla con estas condiciones, requiere el archivo y lo agrega al arreglo modelDefiners.
// Después, para cada modelo en modelDefiners, se llama a la función del modelo, pasándole la conexión (sequelize) como argumento. Esto es para que cada modelo tenga acceso a la conexión y pueda realizar consultas a la base de datos.
// Por último, el código capitaliza el nombre de cada modelo. Esto significa que el primer carácter de cada nombre se convierte en mayúscula, de modo que product se convierte en Product, por ejemplo. Esto es porque Sequelize espera que los nombres de los modelos estén en formato camelCase y capitalizados.
//TODO ESTE CODIGO ES LO MISMO QUE LLAMAR MODELO x MODELO POR SU CARPETA E INYECTANDOLE sequelize.

// EJ: UserModel(sequelize); 
// EL PRIMERO MAS ESCALABRE SI HAY MUCHOS MODELOS, EL SEGUNDO SI HAY POCOS MAS DIRECTO.
AModel(sequelize)


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { A } = sequelize.models;

// console.log(Object.getOwnPropertyNames(sequelize.models.Activity.prototype)) Con esto puedo ver los metodos generados por sequelize para ver por ej, addCountries()

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    connection : sequelize,     // para importart la conexión { conn } = require('./db.js');
  };