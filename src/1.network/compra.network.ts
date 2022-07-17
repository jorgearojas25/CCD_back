import Compra from "@/interfaces/Entities/Compra/compra.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Compra/compra.validation";
import CompraBusiness from "@/business/compra.business";
import response from "@/utils/response";

class CompraNetwork implements Controller {
    public path = "/compra";
    public router = Router();
    private CompraBusiness = new CompraBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of compras
         */
        this.router.get(`${this.path}`, this.listCompras);

        /**
         * Get compra by Id
         */
        this.router.get(`${this.path}/:id`, this.searchCompraById);

        /**
         * Create one Compra
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.compraValidation),
            this.addCompra
        );

        /**
         * Update one Compra
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.compraValidation),
            this.updateCompra
        );

        /**
         * Delete compra by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteCompraById);
    }

    //* Network Methods

    private listCompras = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Compra[]> => {
        try {
            const data = await this.CompraBusiness.listCompras();

            response.success(res, data, 200, "Everycompra is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchCompraById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Compra[]> => {
        try {
            const data = await this.CompraBusiness.searchCompraById(
                req.params.id
            );

            response.success(res, data, 200, "Everycompra is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addCompra = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Compra[]> => {
        try {
            const data = await this.CompraBusiness.addCompra(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateCompra = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Compra[]> => {
        try {
            const data = await this.CompraBusiness.updateCompra(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteCompraById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Compra[]> => {
        try {
            const data = await this.CompraBusiness.deleteCompraById(
                req.params.id
            );

            response.success(res, data, 200, "Everycompra is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default CompraNetwork;
