/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;