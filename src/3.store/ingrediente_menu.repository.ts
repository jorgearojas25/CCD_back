import Repository from "@/interfaces/common/repository.interface";
import Ingrediente_menu from "@/interfaces/Entities/Ingrediente_menu/ingrediente_menu.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class Ingrediente_menuRepository implements Repository {
    public entitieName = "ingrediente_menu";

    /**
     * Get list of ingrediente_menus
     */
    public async getIngrediente_menus(): Promise<any | Ingrediente_menu[]> {
        try {
            const conn = await connect();
            const ingrediente_menus = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return ingrediente_menus[0];
        } catch (e) {
            throw new Error("Unable to get ingrediente_menus");
        }
    }

    /**
     * Get one ingrediente_menu by Id field
     * @param id ingrediente_menu Id
     */
    public async getIngrediente_menuById(
        id: any
    ): Promise<any | Ingrediente_menu[]> {
        try {
            const conn = await connect();
            const ingrediente_menus = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return ingrediente_menus[0];
        } catch (e) {
            throw new Error("Unable to get ingrediente_menus");
        }
    }

    /**
     * Add one ingrediente_menu
     * @param ingrediente_menu Insert data
     */
    public async postIngrediente_menu(
        ingrediente_menu: Ingrediente_menu
    ): Promise<any> {
        try {
            const conn = await connect();
            const newIngrediente_menu = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                ingrediente_menu
            );

            return newIngrediente_menu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one ingrediente_menu
     * @param ingrediente_menu Data for update ingrediente_menus
     * @returns information of the updated ingrediente_menu
     */
    public async updateIngrediente_menuById(
        ingrediente_menu: Ingrediente_menu
    ): Promise<any> {
        try {
            const { id_ingrediente_menu } = ingrediente_menu;
            const conn = await connect();
            const updatedIngrediente_menu = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [ingrediente_menu, id_ingrediente_menu]
            );

            return updatedIngrediente_menu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one ingrediente_menu by his Id
     * @param id Id of the ingrediente_menu to delete
     * @returns
     */
    public async deleteIngrediente_menuById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedIngrediente_menu = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedIngrediente_menu;
        } catch (e) {
            throw e;
        }
    }
}

export default Ingrediente_menuRepository;
