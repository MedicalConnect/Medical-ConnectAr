const mercadopago = require('mercadopago');
require("dotenv").config();
const { MERCADOPAGO_KEY} = process.env;

const pagosHandler = async (req, res) => {
  const  serv = req.body

      let preference = {
        items: [{
          id: 1,
          title: serv.nombre,
          currency_id: 'ARS',
          picture_url: serv.imagen,
          description: serv.detalle,
          category_id:'art',
          quantity: 1,
          unit_price:serv.precio

      }],
      back_urls: {
        success:'https://medicalconnectapi.onrender.com/',
        failure: '',
        pending:'',
      },
      auto_return:'approved',
      binary_mode: true,
     
      }

      mercadopago.configure({
        access_token: `${MERCADOPAGO_KEY}`
      })
      console.log(preference)
      mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).send(response.body))
      .catch((err) =>res.status(400).send(console.log(err)))
  };


module.exports = {
    pagosHandler
}