export default interface Menu{
    id_menu?: number;
    nombre: string;
    decripcion: string;
    imagen: string;
    activo: boolean;

    //! FK
    id_restaurante: string;
}