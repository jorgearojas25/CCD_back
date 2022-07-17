import Tipo_producto from "@/interfaces/Entities/Tipo_producto/tipo_producto.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Tipo_producto/tipo_producto.validation";
import Tipo_productoBusiness from "@/business/tipo_producto.business";
import response from "@/utils/response";

class Tipo_productoNetwork implements Controller {
    public path = "/tipo_producto";
    public router = Router();
    private Tipo_productoBusiness = new Tipo_productoBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of tipo_productos
         */
        this.router.get(`${this.path}`, this.listTipo_productos);

        /**
         * Get tipo_producto by Id
         */
        this.router.get(`${this.path}/:id`, this.searchTipo_productoById);

        /**
         * Create one Tipo_producto
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.tipo_productoValidation),
            this.addTipo_producto
        );

        /**
         * Update one Tipo_producto
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.tipo_productoValidation),
            this.updateTipo_producto
        );

        /**
         * Delete tipo_producto by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteTipo_productoById);
    }

    //* Network Methods

    private listTipo_productos = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Tipo_producto[]> => {
        try {
            const data = await this.Tipo_productoBusiness.listTipo_productos();

            response.success(res, data, 200, "Everytipo_producto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchTipo_productoById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Tipo_producto[]> => {
        try {
            const data =
                await this.Tipo_productoBusiness.searchTipo_productoById(
                    req.params.id
                );

            response.success(res, data, 200, "Everytipo_producto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addTipo_producto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Tipo_producto[]> => {
        try {
            const data = await this.Tipo_productoBusiness.addTipo_producto(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateTipo_producto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Tipo_producto[]> => {
        try {
            const data = await this.Tipo_productoBusiness.updateTipo_producto(
                req.body
            );

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteTipo_productoById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Tipo_producto[]> => {
        try {
            const data =
                await this.Tipo_productoBusiness.deleteTipo_productoById(
                    req.params.id
                );

            response.success(res, data, 200, "Everytipo_producto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default Tipo_productoNetwork;
