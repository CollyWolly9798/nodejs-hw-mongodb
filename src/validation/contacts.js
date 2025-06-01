import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().min(3).max(20).required(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});

// const validationResult = createContactSchema.validate({
//   abortEarly: false,
// });
// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }
