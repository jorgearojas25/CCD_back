import Joi from "joi";

/**
 * Validation for add a Thing
 */
const compraValidation = Joi.object({
    id_tipo_producto: Joi.number(),
    nombre: Joi.string(),
    activo: Joi.boolean(),
});

export default { compraValidation };
