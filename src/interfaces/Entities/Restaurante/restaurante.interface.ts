export default interface Restaurante{
    id_restaurante?: number;
    nombre: string;
    documento: string;
    contrasenia: string;
    imagen: string;
    activo?: boolean;
    cuenta_pago?: string;
}