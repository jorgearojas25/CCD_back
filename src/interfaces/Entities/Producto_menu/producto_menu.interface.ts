export default interface Producto_menu{
    id_producto_menu?: number;
    cantidad: number;
    editable?: boolean;

    //!FK
    id_menu: number;
    id_producto: number;
}