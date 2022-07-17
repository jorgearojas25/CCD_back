import Ingrediente from "@/interfaces/Entities/Ingrediente/ingrediente.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Ingrediente/ingrediente.validation";
import IngredienteBusiness from "@/business/ingrediente.business";
import response from "@/utils/response";

class IngredienteNetwork implements Controller {
    public path = "/ingrediente";
    public router = Router();
    private IngredienteBusiness = new IngredienteBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of ingredientes
         */
        this.router.get(`${this.path}`, this.listIngredientes);

        /**
         * Get ingrediente by Id
         */
        this.router.get(`${this.path}/:id`, this.searchIngredienteById);

        /**
         * Create one Ingrediente
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.ingredienteValidation),
            this.addIngrediente
        );

        /**
         * Update one Ingrediente
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.ingredienteValidation),
            this.updateIngrediente
        );

        /**
         * Delete ingrediente by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteIngredienteById);
    }

    //* Network Methods

    private listIngredientes = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente[]> => {
        try {
            const data = await this.IngredienteBusiness.listIngredientes();

            response.success(res, data, 200, "Everyingrediente is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchIngredienteById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente[]> => {
        try {
            const data = await this.IngredienteBusiness.searchIngredienteById(
                req.params.id
            );

            response.success(res, data, 200, "Everyingrediente is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addIngrediente = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente[]> => {
        try {
            const data = await this.IngredienteBusiness.addIngrediente(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateIngrediente = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente[]> => {
        try {
            const data = await this.IngredienteBusiness.updateIngrediente(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteIngredienteById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Ingrediente[]> => {
        try {
            const data = await this.IngredienteBusiness.deleteIngredienteById(
                req.params.id
            );

            response.success(res, data, 200, "Everyingrediente is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default IngredienteNetwork;
