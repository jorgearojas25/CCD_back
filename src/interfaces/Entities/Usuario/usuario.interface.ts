export default interface Usuario {
    id_usuario?: number;
    documento: string;
    nombre: string;
    contrasenia: string;
    activo?: boolean;
    cuenta_pago?: string;

    //!FK
    id_rol: number;
}
