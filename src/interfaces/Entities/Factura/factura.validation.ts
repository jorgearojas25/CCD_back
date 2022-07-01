import Joi from "joi";

/**
 * Validation for add a Thing
 */
const compraValidation = Joi.object({
    id_factura: Joi.number(),
    cantidad: Joi.number(),
    valor_total: Joi.number(),
    es_producto: Joi.boolean(),

    //!FK
    id_compra: Joi.number(),
    id_producto_menu: Joi.number(),
    id_ingrediente_menu: Joi.number(),
});

export default { compraValidation };
