import Joi from "joi";

/**
 * Validation for add a Thing
 */
const compraValidation = Joi.object({
    id_ingrediente: Joi.number(),
    nombre: Joi.string(),
    descripcion: Joi.string(),
    imagen: Joi.string(),
    activo: Joi.boolean(),
    valor: Joi.number(),
});

export default { compraValidation };
