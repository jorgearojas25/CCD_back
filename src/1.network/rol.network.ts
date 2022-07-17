import Rol from "@/interfaces/Entities/Rol/rol.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Rol/rol.validation";
import RolBusiness from "@/business/rol.business";
import response from "@/utils/response";

class RolNetwork implements Controller {
    public path = "/rol";
    public router = Router();
    private RolBusiness = new RolBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of rols
         */
        this.router.get(`${this.path}`, this.listRols);

        /**
         * Get rol by Id
         */
        this.router.get(`${this.path}/:id`, this.searchRolById);

        /**
         * Create one Rol
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.rolValidation),
            this.addRol
        );

        /**
         * Update one Rol
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.rolValidation),
            this.updateRol
        );

        /**
         * Delete rol by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteRolById);
    }

    //* Network Methods

    private listRols = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Rol[]> => {
        try {
            const data = await this.RolBusiness.listRols();

            response.success(res, data, 200, "Everyrol is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchRolById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Rol[]> => {
        try {
            const data = await this.RolBusiness.searchRolById(req.params.id);

            response.success(res, data, 200, "Everyrol is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addRol = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Rol[]> => {
        try {
            const data = await this.RolBusiness.addRol(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateRol = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Rol[]> => {
        try {
            const data = await this.RolBusiness.updateRol(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteRolById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Rol[]> => {
        try {
            const data = await this.RolBusiness.deleteRolById(req.params.id);

            response.success(res, data, 200, "Everyrol is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default RolNetwork;
