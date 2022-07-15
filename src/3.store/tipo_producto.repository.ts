import Repository from "@/interfaces/common/repository.interface";
import Tipo_producto from "@/interfaces/Entities/Tipo_producto/tipo_producto.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class Tipo_productoRepository implements Repository {
    public entityName = "tipo_producto";
    public entityId = "id_tipo_producto";

    /**
     * Get list of tipo_productos
     */
    public async getTipo_productos(): Promise<any | Tipo_producto[]> {
        try {
            const conn = await connect();
            const tipo_productos = await conn.query(
                querys.getAllRows(this.entityName)
            );

            return tipo_productos[0];
        } catch (e) {
            throw new Error("Unable to get tipo_productos");
        }
    }

    /**
     * Get one tipo_producto by Id field
     * @param id tipo_producto Id
     */
    public async getTipo_productoById(id: any): Promise<any | Tipo_producto[]> {
        try {
            const conn = await connect();
            const tipo_productos = await conn.query(
                querys.searchById(this.entityName, id, this.entityId)
            );

            return tipo_productos[0];
        } catch (e) {
            throw new Error("Unable to get tipo_productos");
        }
    }

    /**
     * Add one tipo_producto
     * @param tipo_producto Insert data
     */
    public async postTipo_producto(tipo_producto: Tipo_producto): Promise<any> {
        try {
            const conn = await connect();
            const newTipo_producto = await conn.query(
                `INSERT INTO ${this.entityName} SET ?`,
                tipo_producto
            );

            return newTipo_producto;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one tipo_producto
     * @param tipo_producto Data for update tipo_productos
     * @returns information of the updated tipo_producto
     */
    public async updateTipo_productoById(
        tipo_producto: Tipo_producto
    ): Promise<any> {
        try {
            const { id_tipo_producto } = tipo_producto;
            const conn = await connect();
            const updatedTipo_producto = await conn.query(
                `UPDATE ${this.entityName} SET ? WHERE id = ?`,
                [tipo_producto, id_tipo_producto]
            );

            return updatedTipo_producto;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one tipo_producto by his Id
     * @param id Id of the tipo_producto to delete
     * @returns
     */
    public async deleteTipo_productoById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedTipo_producto = await conn.query(
                querys.deleteById(this.entityName, id, this.entityId)
            );

            return deletedTipo_producto;
        } catch (e) {
            throw e;
        }
    }
}

export default Tipo_productoRepository;
