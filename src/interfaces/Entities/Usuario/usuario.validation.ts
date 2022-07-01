import Joi from "joi";

/**
 * Validation for add a Thing
 */
const compraValidation = Joi.object({
    id_usuario: Joi.number(),
    documento: Joi.string(),
    nombre: Joi.string(),
    contrasenia: Joi.string(),
    activo: Joi.boolean(),
    cuenta_pago: Joi.string(),

    //!FK
    id_rol: Joi.number(),
});

export default { compraValidation };
