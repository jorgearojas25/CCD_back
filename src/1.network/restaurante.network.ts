import Restaurante from "@/interfaces/Entities/Restaurante/restaurante.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Restaurante/restaurante.validation";
import RestauranteBusiness from "@/business/restaurante.business";
import response from "@/utils/response";

class RestauranteNetwork implements Controller {
    public path = "/restaurante";
    public router = Router();
    private RestauranteBusiness = new RestauranteBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of restaurantes
         */
        this.router.get(`${this.path}`, this.listRestaurantes);

        /**
         * Get restaurante by Id
         */
        this.router.get(`${this.path}/:id`, this.searchRestauranteById);

        /**
         * Create one Restaurante
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.restauranteValidation),
            this.addRestaurante
        );

        /**
         * Update one Restaurante
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.restauranteValidation),
            this.updateRestaurante
        );

        /**
         * Delete restaurante by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteRestauranteById);
    }

    //* Network Methods

    private listRestaurantes = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Restaurante[]> => {
        try {
            const data = await this.RestauranteBusiness.listRestaurantes();

            response.success(res, data, 200, "Everyrestaurante is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchRestauranteById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Restaurante[]> => {
        try {
            const data = await this.RestauranteBusiness.searchRestauranteById(
                req.params.id
            );

            response.success(res, data, 200, "Everyrestaurante is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addRestaurante = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Restaurante[]> => {
        try {
            const data = await this.RestauranteBusiness.addRestaurante(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateRestaurante = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Restaurante[]> => {
        try {
            const data = await this.RestauranteBusiness.updateRestaurante(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteRestauranteById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Restaurante[]> => {
        try {
            const data = await this.RestauranteBusiness.deleteRestauranteById(
                req.params.id
            );

            response.success(res, data, 200, "Everyrestaurante is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default RestauranteNetwork;
