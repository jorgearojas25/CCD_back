export default interface Producto{
    id_producto?: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    activo?: boolean;
    valor: number;

    //!FK
    id_tipo_producto: number;
    id_restaurante: number;
}