import FacturaRepository from "@/store/factura.repository";
import Factura from "@/interfaces/Entities/Factura/factura.interface";

class FacturaBusiness {
    private FacturaRepository = new FacturaRepository();

    public listFacturas = async (): Promise<Factura[] | void> => {
        try {
            const facturas = await this.FacturaRepository.getFacturas();

            return facturas;
        } catch (e) {
            throw e;
        }
    };

    public searchFacturaById = async (id: any): Promise<Factura[] | void> => {
        try {
            const facturas = await this.FacturaRepository.getFacturaById(id);

            return facturas;
        } catch (e) {
            throw e;
        }
    };

    public addFactura = async (factura: Factura): Promise<Factura[] | void> => {
        try {
            const result = await this.FacturaRepository.postFactura(factura);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateFactura = async (
        factura: Factura
    ): Promise<Factura[] | void> => {
        try {
            const result = await this.FacturaRepository.updateFacturaById(
                factura
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteFacturaById = async (id: any): Promise<Factura[] | void> => {
        try {
            const facturas = await this.FacturaRepository.deleteFacturaById(id);

            return facturas;
        } catch (e) {
            throw e;
        }
    };
}

export default FacturaBusiness;
