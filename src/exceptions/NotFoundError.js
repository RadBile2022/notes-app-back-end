/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;