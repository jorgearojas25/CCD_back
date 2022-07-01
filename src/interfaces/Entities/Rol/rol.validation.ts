import Joi from "joi";

/**
 * Validation for add a Thing
 */
const rolValidation = Joi.object({
    id_rol: Joi.number(),
    rol: Joi.string(),
    activo: Joi.boolean(),
});

export default { rolValidation };
