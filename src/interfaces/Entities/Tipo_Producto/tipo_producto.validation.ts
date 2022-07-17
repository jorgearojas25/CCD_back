import Joi from "joi";

/**
 * Validation for add a Thing
 */
const tipo_productoValidation = Joi.object({
    id_tipo_producto: Joi.number(),
    nombre: Joi.string(),
    activo: Joi.boolean(),
});

export default { tipo_productoValidation };
