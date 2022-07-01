export default interface Ingrediente_menu{
    id_ingrediente_menu?: number;
    cantidad: number;
    editable?: boolean;

    //!FK
    id_menu: number;
    id_ingrediente: number;
}