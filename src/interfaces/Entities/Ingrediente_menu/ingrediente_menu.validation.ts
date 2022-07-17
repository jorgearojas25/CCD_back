import Joi from "joi";

/**
 * Validation for add a Thing
 */
const ingrediente_menuValidation = Joi.object({
    id_ingrediente_menu: Joi.number(),
    cantidad: Joi.number(),
    editable: Joi.boolean(),

    //!FK
    id_menu: Joi.number(),
    id_ingrediente: Joi.number(),
});

export default { ingrediente_menuValidation };
