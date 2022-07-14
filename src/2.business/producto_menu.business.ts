import Producto_menuRepository from "@/store/producto_menu.repository";
import Producto_menu from "@/interfaces/Entities/Producto_menu/producto_menu.interface";

class Producto_menuBusiness {
    private Producto_menuRepository = new Producto_menuRepository();

    public listProducto_menus = async (): Promise<Producto_menu[] | void> => {
        try {
            const producto_menus =
                await this.Producto_menuRepository.getProducto_menus();

            return producto_menus;
        } catch (e) {
            throw e;
        }
    };

    public searchProducto_menuById = async (
        id: any
    ): Promise<Producto_menu[] | void> => {
        try {
            const producto_menus =
                await this.Producto_menuRepository.getProducto_menuById(id);

            return producto_menus;
        } catch (e) {
            throw e;
        }
    };

    public addProducto_menu = async (
        producto_menu: Producto_menu
    ): Promise<Producto_menu[] | void> => {
        try {
            const result = await this.Producto_menuRepository.postProducto_menu(
                producto_menu
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateProducto_menu = async (
        producto_menu: Producto_menu
    ): Promise<Producto_menu[] | void> => {
        try {
            const result =
                await this.Producto_menuRepository.updateProducto_menuById(
                    producto_menu
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteProducto_menuById = async (
        id: any
    ): Promise<Producto_menu[] | void> => {
        try {
            const producto_menus =
                await this.Producto_menuRepository.deleteProducto_menuById(id);

            return producto_menus;
        } catch (e) {
            throw e;
        }
    };
}

export default Producto_menuBusiness;
