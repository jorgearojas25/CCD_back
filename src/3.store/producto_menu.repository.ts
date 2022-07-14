import Repository from "@/interfaces/common/repository.interface";
import Producto_menu from "@/interfaces/Entities/Producto_menu/producto_menu.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class Producto_menuRepository implements Repository {
    public entitieName = "producto_menu";

    /**
     * Get list of producto_menus
     */
    public async getProducto_menus(): Promise<any | Producto_menu[]> {
        try {
            const conn = await connect();
            const producto_menus = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return producto_menus[0];
        } catch (e) {
            throw new Error("Unable to get producto_menus");
        }
    }

    /**
     * Get one producto_menu by Id field
     * @param id producto_menu Id
     */
    public async getProducto_menuById(id: any): Promise<any | Producto_menu[]> {
        try {
            const conn = await connect();
            const producto_menus = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return producto_menus[0];
        } catch (e) {
            throw new Error("Unable to get producto_menus");
        }
    }

    /**
     * Add one producto_menu
     * @param producto_menu Insert data
     */
    public async postProducto_menu(producto_menu: Producto_menu): Promise<any> {
        try {
            const conn = await connect();
            const newProducto_menu = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                producto_menu
            );

            return newProducto_menu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one producto_menu
     * @param producto_menu Data for update producto_menus
     * @returns information of the updated producto_menu
     */
    public async updateProducto_menuById(
        producto_menu: Producto_menu
    ): Promise<any> {
        try {
            const { id_producto_menu } = producto_menu;
            const conn = await connect();
            const updatedProducto_menu = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [producto_menu, id_producto_menu]
            );

            return updatedProducto_menu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one producto_menu by his Id
     * @param id Id of the producto_menu to delete
     * @returns
     */
    public async deleteProducto_menuById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedProducto_menu = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedProducto_menu;
        } catch (e) {
            throw e;
        }
    }
}

export default Producto_menuRepository;
