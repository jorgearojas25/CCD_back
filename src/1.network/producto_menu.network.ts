import Producto_menu from "@/interfaces/Entities/Producto_menu/producto_menu.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Producto_menu/producto_menu.validation";
import Producto_menuBusiness from "@/business/producto_menu.business";
import response from "@/utils/response";

class Producto_menuNetwork implements Controller {
    public path = "/producto_menu";
    public router = Router();
    private Producto_menuBusiness = new Producto_menuBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of producto_menus
         */
        this.router.get(`${this.path}`, this.listProducto_menus);

        /**
         * Get producto_menu by Id
         */
        this.router.get(`${this.path}/:id`, this.searchProducto_menuById);

        /**
         * Create one Producto_menu
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.producto_menuValidation),
            this.addProducto_menu
        );

        /**
         * Update one Producto_menu
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.producto_menuValidation),
            this.updateProducto_menu
        );

        /**
         * Delete producto_menu by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteProducto_menuById);
    }

    //* Network Methods

    private listProducto_menus = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto_menu[]> => {
        try {
            const data = await this.Producto_menuBusiness.listProducto_menus();

            response.success(res, data, 200, "Everyproducto_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchProducto_menuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto_menu[]> => {
        try {
            const data =
                await this.Producto_menuBusiness.searchProducto_menuById(
                    req.params.id
                );

            response.success(res, data, 200, "Everyproducto_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addProducto_menu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto_menu[]> => {
        try {
            const data = await this.Producto_menuBusiness.addProducto_menu(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateProducto_menu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto_menu[]> => {
        try {
            const data = await this.Producto_menuBusiness.updateProducto_menu(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteProducto_menuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto_menu[]> => {
        try {
            const data =
                await this.Producto_menuBusiness.deleteProducto_menuById(
                    req.params.id
                );

            response.success(res, data, 200, "Everyproducto_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default Producto_menuNetwork;
