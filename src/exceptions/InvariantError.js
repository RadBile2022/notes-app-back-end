/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const ClientError = require('./ClientError');

class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;