import Tipo_productoRepository from "@/store/tipo_producto.repository";
import Tipo_producto from "@/interfaces/Entities/Tipo_producto/tipo_producto.interface";

class Tipo_productoBusiness {
    private Tipo_productoRepository = new Tipo_productoRepository();

    public listTipo_productos = async (): Promise<Tipo_producto[] | void> => {
        try {
            const tipo_productos =
                await this.Tipo_productoRepository.getTipo_productos();

            return tipo_productos;
        } catch (e) {
            throw e;
        }
    };

    public searchTipo_productoById = async (
        id: any
    ): Promise<Tipo_producto[] | void> => {
        try {
            const tipo_productos =
                await this.Tipo_productoRepository.getTipo_productoById(id);

            return tipo_productos;
        } catch (e) {
            throw e;
        }
    };

    public addTipo_producto = async (
        tipo_producto: Tipo_producto
    ): Promise<Tipo_producto[] | void> => {
        try {
            const result = await this.Tipo_productoRepository.postTipo_producto(
                tipo_producto
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateTipo_producto = async (
        tipo_producto: Tipo_producto
    ): Promise<Tipo_producto[] | void> => {
        try {
            const result =
                await this.Tipo_productoRepository.updateTipo_productoById(
                    tipo_producto
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteTipo_productoById = async (
        id: any
    ): Promise<Tipo_producto[] | void> => {
        try {
            const tipo_productos =
                await this.Tipo_productoRepository.deleteTipo_productoById(id);

            return tipo_productos;
        } catch (e) {
            throw e;
        }
    };
}

export default Tipo_productoBusiness;
