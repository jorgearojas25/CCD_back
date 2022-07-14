import MenuRepository from "@/store/menu.repository";
import Menu from "@/interfaces/Entities/Menu/menu.interface";

class MenuBusiness {
    private MenuRepository = new MenuRepository();

    public listMenus = async (): Promise<Menu[] | void> => {
        try {
            const menus = await this.MenuRepository.getMenus();

            return menus;
        } catch (e) {
            throw e;
        }
    };

    public searchMenuById = async (id: any): Promise<Menu[] | void> => {
        try {
            const menus = await this.MenuRepository.getMenuById(id);

            return menus;
        } catch (e) {
            throw e;
        }
    };

    public addMenu = async (menu: Menu): Promise<Menu[] | void> => {
        try {
            const result = await this.MenuRepository.postMenu(menu);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateMenu = async (menu: Menu): Promise<Menu[] | void> => {
        try {
            const result = await this.MenuRepository.updateMenuById(menu);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteMenuById = async (id: any): Promise<Menu[] | void> => {
        try {
            const menus = await this.MenuRepository.deleteMenuById(id);

            return menus;
        } catch (e) {
            throw e;
        }
    };
}

export default MenuBusiness;
