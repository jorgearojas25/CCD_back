import Factura from "@/interfaces/Entities/Factura/factura.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Factura/factura.validation";
import FacturaBusiness from "@/business/factura.business";
import response from "@/utils/response";

class FacturaNetwork implements Controller {
    public path = "/factura";
    public router = Router();
    private FacturaBusiness = new FacturaBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of facturas
         */
        this.router.get(`${this.path}`, this.listFacturas);

        /**
         * Get factura by Id
         */
        this.router.get(`${this.path}/:id`, this.searchFacturaById);

        /**
         * Create one Factura
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.facturaValidation),
            this.addFactura
        );

        /**
         * Update one Factura
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.facturaValidation),
            this.updateFactura
        );

        /**
         * Delete factura by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteFacturaById);
    }

    //* Network Methods

    private listFacturas = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Factura[]> => {
        try {
            const data = await this.FacturaBusiness.listFacturas();

            response.success(res, data, 200, "Everyfactura is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchFacturaById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Factura[]> => {
        try {
            const data = await this.FacturaBusiness.searchFacturaById(
                req.params.id
            );

            response.success(res, data, 200, "Everyfactura is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addFactura = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Factura[]> => {
        try {
            const data = await this.FacturaBusiness.addFactura(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateFactura = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Factura[]> => {
        try {
            const data = await this.FacturaBusiness.updateFactura(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteFacturaById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Factura[]> => {
        try {
            const data = await this.FacturaBusiness.deleteFacturaById(
                req.params.id
            );

            response.success(res, data, 200, "Everyfactura is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default FacturaNetwork;
