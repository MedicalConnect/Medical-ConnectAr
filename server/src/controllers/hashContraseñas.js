const SHA256 = require('crypto-js/sha256');
const crypto = require('crypto-js')

function hash(data) {
    // Calculamos el hash utilizando SHA-256
    const hash = SHA256(data);
    // Devolvemos el hash como un string en formato hexadecimal
    return hash.toString(crypto.enc.Hex);
  }

  module.exports = {
    hash,
  };
  