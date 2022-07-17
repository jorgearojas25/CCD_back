import Menu from "@/interfaces/Entities/Menu/menu.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Menu/menu.validation";
import MenuBusiness from "@/business/menu.business";
import response from "@/utils/response";

class MenuNetwork implements Controller {
    public path = "/menu";
    public router = Router();
    private MenuBusiness = new MenuBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of menus
         */
        this.router.get(`${this.path}`, this.listMenus);

        /**
         * Get menu by Id
         */
        this.router.get(`${this.path}/:id`, this.searchMenuById);

        /**
         * Create one Menu
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.menuValidation),
            this.addMenu
        );

        /**
         * Update one Menu
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.menuValidation),
            this.updateMenu
        );

        /**
         * Delete menu by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteMenuById);
    }

    //* Network Methods

    private listMenus = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Menu[]> => {
        try {
            const data = await this.MenuBusiness.listMenus();

            response.success(res, data, 200, "Everymenu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchMenuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Menu[]> => {
        try {
            const data = await this.MenuBusiness.searchMenuById(req.params.id);

            response.success(res, data, 200, "Everymenu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addMenu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Menu[]> => {
        try {
            const data = await this.MenuBusiness.addMenu(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateMenu = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Menu[]> => {
        try {
            const data = await this.MenuBusiness.updateMenu(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteMenuById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Menu[]> => {
        try {
            const data = await this.MenuBusiness.deleteMenuById(req.params.id);

            response.success(res, data, 200, "Everymenu is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default MenuNetwork;
