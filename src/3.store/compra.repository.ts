import Repository from "@/interfaces/common/repository.interface";
import Compra from "@/interfaces/Entities/Compra/compra.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class CompraRepository implements Repository {
    public entityName = "compra";
    public entityId = "id_compra";

    /**
     * Get list of compras
     */
    public async getCompras(): Promise<any | Compra[]> {
        try {
            const conn = await connect();
            const compras = await conn.query(
                querys.getAllRows(this.entityName)
            );

            return compras[0];
        } catch (e) {
            throw new Error("Unable to get compras");
        }
    }

    /**
     * Get one compra by Id field
     * @param id compra Id
     */
    public async getCompraById(id: any): Promise<any | Compra[]> {
        try {
            const conn = await connect();
            const compras = await conn.query(
                querys.searchById(this.entityName, id, this.entityId)
            );

            return compras[0];
        } catch (e) {
            throw new Error("Unable to get compras");
        }
    }

    /**
     * Add one compra
     * @param compra Insert data
     */
    public async postCompra(compra: Compra): Promise<any> {
        try {
            const conn = await connect();
            const newCompra = await conn.query(
                `INSERT INTO ${this.entityName} SET ?`,
                compra
            );

            return newCompra;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one compra
     * @param compra Data for update compras
     * @returns information of the updated compra
     */
    public async updateCompraById(compra: Compra): Promise<any> {
        try {
            const { id_compra } = compra;
            const conn = await connect();
            const updatedCompra = await conn.query(
                `UPDATE ${this.entityName} SET ? WHERE ${this.entityId} = ?`,
                [compra, id_compra]
            );

            return updatedCompra;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one compra by his Id
     * @param id Id of the compra to delete
     * @returns
     */
    public async deleteCompraById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedCompra = await conn.query(
                querys.deleteById(this.entityName, id, this.entityId)
            );

            return deletedCompra;
        } catch (e) {
            throw e;
        }
    }
}

export default CompraRepository;
