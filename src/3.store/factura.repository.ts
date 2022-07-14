import Repository from "@/interfaces/common/repository.interface";
import Factura from "@/interfaces/Entities/Factura/factura.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class FacturaRepository implements Repository {
    public entitieName = "factura";

    /**
     * Get list of facturas
     */
    public async getFacturas(): Promise<any | Factura[]> {
        try {
            const conn = await connect();
            const facturas = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return facturas[0];
        } catch (e) {
            throw new Error("Unable to get facturas");
        }
    }

    /**
     * Get one factura by Id field
     * @param id factura Id
     */
    public async getFacturaById(id: any): Promise<any | Factura[]> {
        try {
            const conn = await connect();
            const facturas = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return facturas[0];
        } catch (e) {
            throw new Error("Unable to get facturas");
        }
    }

    /**
     * Add one factura
     * @param factura Insert data
     */
    public async postFactura(factura: Factura): Promise<any> {
        try {
            const conn = await connect();
            const newFactura = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                factura
            );

            return newFactura;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one factura
     * @param factura Data for update facturas
     * @returns information of the updated factura
     */
    public async updateFacturaById(factura: Factura): Promise<any> {
        try {
            const { id_factura } = factura;
            const conn = await connect();
            const updatedFactura = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [factura, id_factura]
            );

            return updatedFactura;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one factura by his Id
     * @param id Id of the factura to delete
     * @returns
     */
    public async deleteFacturaById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedFactura = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedFactura;
        } catch (e) {
            throw e;
        }
    }
}

export default FacturaRepository;
