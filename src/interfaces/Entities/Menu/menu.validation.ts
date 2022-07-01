import Joi from "joi";

/**
 * Validation for add a Thing
 */
const menuValidation = Joi.object({
    id_menu: Joi.number(),
    nombre: Joi.string(),
    decripcion: Joi.string(),
    imagen: Joi.string(),
    activo: Joi.boolean(),

    //! FK
    id_restaurante: Joi.number(),
});

export default { menuValidation };
