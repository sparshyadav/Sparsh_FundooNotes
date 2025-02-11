/* eslint-disable max-len */
import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  console.log('Inside Validator');
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string()
      .email()
      .pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
      .required(),
    phoneNo: Joi.number()
      .integer()
      .min(6000000000)
      .max(9999999999)
      .optional()
      .messages({
        'number.base': 'Phone number must be a number.'
      }),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/
      )
      .required()
      .messages({
        'string.pattern.base':
          'Password must be at least 6 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      })
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
