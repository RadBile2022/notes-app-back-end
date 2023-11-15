/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
