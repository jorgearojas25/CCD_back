export default interface Ingrediente{
    id_ingrediente?: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    activo?: boolean;
    valor: number;
}