import Joi from "joi";

/**
 * Validation for add a Thing
 */
const productoValidation = Joi.object({
    id_producto: Joi.number(),
    nombre: Joi.string(),
    descripcion: Joi.string(),
    imagen: Joi.string().allow(""),
    activo: Joi.boolean(),
    valor: Joi.number(),

    //!FK
    id_tipo_producto: Joi.number(),
    id_restaurante: Joi.number(),
});

export default { productoValidation };
