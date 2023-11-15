/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'Client Error';
  }
}

module.exports = ClientError;