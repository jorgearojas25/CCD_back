import Repository from "@/interfaces/common/repository.interface";
import Producto from "@/interfaces/Entities/Producto/producto.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class ProductoRepository implements Repository {
    public entitieName = "producto";

    /**
     * Get list of productos
     */
    public async getProductos(): Promise<any | Producto[]> {
        try {
            const conn = await connect();
            const productos = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return productos[0];
        } catch (e) {
            throw new Error("Unable to get productos");
        }
    }

    /**
     * Get one producto by Id field
     * @param id producto Id
     */
    public async getProductoById(id: any): Promise<any | Producto[]> {
        try {
            const conn = await connect();
            const productos = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return productos[0];
        } catch (e) {
            throw new Error("Unable to get productos");
        }
    }

    /**
     * Add one producto
     * @param producto Insert data
     */
    public async postProducto(producto: Producto): Promise<any> {
        try {
            const conn = await connect();
            const newProducto = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                producto
            );

            return newProducto;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one producto
     * @param producto Data for update productos
     * @returns information of the updated producto
     */
    public async updateProductoById(producto: Producto): Promise<any> {
        try {
            const { id_producto } = producto;
            const conn = await connect();
            const updatedProducto = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [producto, id_producto]
            );

            return updatedProducto;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one producto by his Id
     * @param id Id of the producto to delete
     * @returns
     */
    public async deleteProductoById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedProducto = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedProducto;
        } catch (e) {
            throw e;
        }
    }
}

export default ProductoRepository;