import Joi from 'joi';

export const incidentValidationSchema = Joi.object({
  title: Joi.string().required().trim().messages({
    'string.empty': 'Title is required',
    'any.required': 'Title is required'
  }),
  description: Joi.string().required().trim().messages({
    'string.empty': 'Description is required',
    'any.required': 'Description is required'
  }),
  severity: Joi.string().valid('Low', 'Medium', 'High').required().messages({
    'string.empty': 'Severity is required',
    'any.required': 'Severity is required',
    'any.only': 'Severity must be one of: Low, Medium, High'
  })
});
