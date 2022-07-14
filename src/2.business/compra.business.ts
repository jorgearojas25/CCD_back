import CompraRepository from "@/store/compra.repository";
import Compra from "@/interfaces/Entities/Compra/compra.interface";

class CompraBusiness {
    private CompraRepository = new CompraRepository();

    public listCompras = async (): Promise<Compra[] | void> => {
        try {
            const compras = await this.CompraRepository.getCompras();

            return compras;
        } catch (e) {
            throw e;
        }
    };

    public searchCompraById = async (id: any): Promise<Compra[] | void> => {
        try {
            const compras = await this.CompraRepository.getCompraById(id);

            return compras;
        } catch (e) {
            throw e;
        }
    };

    public addCompra = async (compra: Compra): Promise<Compra[] | void> => {
        try {
            const result = await this.CompraRepository.postCompra(compra);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateCompra = async (compra: Compra): Promise<Compra[] | void> => {
        try {
            const result = await this.CompraRepository.updateCompraById(compra);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteCompraById = async (id: any): Promise<Compra[] | void> => {
        try {
            const compras = await this.CompraRepository.deleteCompraById(id);

            return compras;
        } catch (e) {
            throw e;
        }
    };
}

export default CompraBusiness;
