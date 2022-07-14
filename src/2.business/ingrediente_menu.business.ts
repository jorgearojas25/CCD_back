import Ingrediente_menuRepository from "@/store/ingrediente_menu.repository";
import Ingrediente_menu from "@/interfaces/Entities/Ingrediente_menu/ingrediente_menu.interface";

class Ingrediente_menuBusiness {
    private Ingrediente_menuRepository = new Ingrediente_menuRepository();

    public listIngrediente_menus = async (): Promise<
        Ingrediente_menu[] | void
    > => {
        try {
            const ingrediente_menus =
                await this.Ingrediente_menuRepository.getIngrediente_menus();

            return ingrediente_menus;
        } catch (e) {
            throw e;
        }
    };

    public searchIngrediente_menuById = async (
        id: any
    ): Promise<Ingrediente_menu[] | void> => {
        try {
            const ingrediente_menus =
                await this.Ingrediente_menuRepository.getIngrediente_menuById(
                    id
                );

            return ingrediente_menus;
        } catch (e) {
            throw e;
        }
    };

    public addIngrediente_menu = async (
        ingrediente_menu: Ingrediente_menu
    ): Promise<Ingrediente_menu[] | void> => {
        try {
            const result =
                await this.Ingrediente_menuRepository.postIngrediente_menu(
                    ingrediente_menu
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateIngrediente_menu = async (
        ingrediente_menu: Ingrediente_menu
    ): Promise<Ingrediente_menu[] | void> => {
        try {
            const result =
                await this.Ingrediente_menuRepository.updateIngrediente_menuById(
                    ingrediente_menu
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteIngrediente_menuById = async (
        id: any
    ): Promise<Ingrediente_menu[] | void> => {
        try {
            const ingrediente_menus =
                await this.Ingrediente_menuRepository.deleteIngrediente_menuById(
                    id
                );

            return ingrediente_menus;
        } catch (e) {
            throw e;
        }
    };
}

export default Ingrediente_menuBusiness;
