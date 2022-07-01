import Joi from "joi";

/**
 * Validation for add a Thing
 */
const restauranteValidation = Joi.object({
    id_restaurante: Joi.number(),
    nombre: Joi.string(),
    documento: Joi.string(),
    contrasenia: Joi.string(),
    imagen: Joi.string(),
    activo: Joi.boolean(),
    cuenta_pago: Joi.string(),
});

export default { restauranteValidation };
