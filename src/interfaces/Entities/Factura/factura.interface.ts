export default interface Factura{
    id_factura?: number;
    cantidad: number;
    valor_total: number;
    es_producto: boolean;

    //!FK
    id_compra: number;
    id_producto_menu: number;
    id_ingrediente_menu: number;
}