import Repository from "@/interfaces/common/repository.interface";
import Menu from "@/interfaces/Entities/Menu/menu.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class MenuRepository implements Repository {
    public entityName = "menu";
    public entityId = "id_menu";

    /**
     * Get list of menus
     */
    public async getMenus(): Promise<any | Menu[]> {
        try {
            const conn = await connect();
            const menus = await conn.query(querys.getAllRows(this.entityName));

            return menus[0];
        } catch (e) {
            throw new Error("Unable to get menus");
        }
    }

    /**
     * Get one menu by Id field
     * @param id menu Id
     */
    public async getMenuById(id: any): Promise<any | Menu[]> {
        try {
            const conn = await connect();
            const menus = await conn.query(
                querys.searchById(this.entityName, id, this.entityId)
            );

            return menus[0];
        } catch (e) {
            throw new Error("Unable to get menus");
        }
    }

    /**
     * Add one menu
     * @param menu Insert data
     */
    public async postMenu(menu: Menu): Promise<any> {
        try {
            const conn = await connect();
            const newMenu = await conn.query(
                `INSERT INTO ${this.entityName} SET ?`,
                menu
            );

            return newMenu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one menu
     * @param menu Data for update menus
     * @returns information of the updated menu
     */
    public async updateMenuById(menu: Menu): Promise<any> {
        try {
            const { id_menu } = menu;
            const conn = await connect();
            const updatedMenu = await conn.query(
                `UPDATE ${this.entityName} SET ? WHERE ${this.entityId} = ?`,
                [menu, id_menu]
            );

            return updatedMenu;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one menu by his Id
     * @param id Id of the menu to delete
     * @returns
     */
    public async deleteMenuById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedMenu = await conn.query(
                querys.deleteById(this.entityName, id, this.entityId)
            );

            return deletedMenu;
        } catch (e) {
            throw e;
        }
    }
}

export default MenuRepository;
