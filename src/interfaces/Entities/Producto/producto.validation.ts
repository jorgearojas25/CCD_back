import Joi from "joi";

/**
 * Validation for add a Thing
 */
const productoValidation = Joi.object({
    id_compra: Joi.number(),
    fecha: Joi.date().default(new Date()),
    valor_total: Joi.number(),

    //!FK
    id_usuario: Joi.number(),
});

export default { productoValidation };
