export default interface Compra{
    id_compra?: number;
    fecha: Date;
    valor_total: number;

    //!FK
    id_usuario?: number;
}