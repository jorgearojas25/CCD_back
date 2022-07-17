import Joi from "joi";

/**
 * Validation for add a Thing
 */
const producto_menuValidation = Joi.object({
    id_producto_menu: Joi.number(),
    cantidad: Joi.number(),
    editable: Joi.boolean(),

    //!FK
    id_menu: Joi.number(),
    id_producto: Joi.number(),
});

export default { producto_menuValidation };
