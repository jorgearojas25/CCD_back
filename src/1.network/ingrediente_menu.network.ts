import Ingrediente_menu from "@/interfaces/Entities/Ingrediente_menu/ingrediente_menu.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Ingrediente_menu/ingrediente_menu.validation";
import Ingrediente_menuBusiness from "@/business/ingrediente_menu.business";
import response from "@/utils/response";

class Ingrediente_menuNetwork implements Controller {
    public path = "/ingrediente_menu";
    public router = Router();
    private Ingrediente_menuBusiness = new Ingrediente_menuBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of ingrediente_menus
         */
        this.router.get(`${this.path}`, this.listIngrediente_menus);

        /**
         * Get ingrediente_menu by Id
         */
        this.router.get(`${this.path}/:id`, this.searchIngrediente_menuById);

        /**
         * Create one Ingrediente_menu
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.ingrediente_menuValidation),
            this.addIngrediente_menu
        );

        /**
         * Update one Ingrediente_menu
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.ingrediente_menuValidation),
            this.updateIngrediente_menu
        );

        /**
         * Delete ingrediente_menu by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteIngrediente_menuById);
    }

    //* Network Methods

    private listIngrediente_menus = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente_menu[]> => {
        try {
            const data =
                await this.Ingrediente_menuBusiness.listIngrediente_menus();

            response.success(res, data, 200, "Everyingrediente_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchIngrediente_menuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente_menu[]> => {
        try {
            const data =
                await this.Ingrediente_menuBusiness.searchIngrediente_menuById(
                    req.params.id
                );

            response.success(res, data, 200, "Everyingrediente_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addIngrediente_menu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente_menu[]> => {
        try {
            const data =
                await this.Ingrediente_menuBusiness.addIngrediente_menu(
                    req.body
                );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateIngrediente_menu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente_menu[]> => {
        try {
            const data =
                await this.Ingrediente_menuBusiness.updateIngrediente_menu(
                    req.body
                );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteIngrediente_menuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente_menu[]> => {
        try {
            const data =
                await this.Ingrediente_menuBusiness.deleteIngrediente_menuById(
                    req.params.id
                );

            response.success(res, data, 200, "Everyingrediente_menu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default Ingrediente_menuNetwork;
