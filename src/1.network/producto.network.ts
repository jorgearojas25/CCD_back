import Producto from "@/interfaces/Entities/Producto/producto.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Producto/producto.validation";
import ProductoBusiness from "@/business/producto.business";
import response from "@/utils/response";

class ProductoNetwork implements Controller {
    public path = "/producto";
    public router = Router();
    private ProductoBusiness = new ProductoBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of productos
         */
        this.router.get(`${this.path}`, this.listProductos);

        /**
         * Get producto by Id
         */
        this.router.get(`${this.path}/:id`, this.searchProductoById);

        /**
         * Create one Producto
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.productoValidation),
            this.addProducto
        );

        /**
         * Update one Producto
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.productoValidation),
            this.updateProducto
        );

        /**
         * Delete producto by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteProductoById);
    }

    //* Network Methods

    private listProductos = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto[]> => {
        try {
            const data = await this.ProductoBusiness.listProductos();

            response.success(res, data, 200, "Everyproducto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchProductoById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto[]> => {
        try {
            const data = await this.ProductoBusiness.searchProductoById(
                req.params.id
            );

            response.success(res, data, 200, "Everyproducto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addProducto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto[]> => {
        try {
            const data = await this.ProductoBusiness.addProducto(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateProducto = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto[]> => {
        try {
            const data = await this.ProductoBusiness.updateProducto(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteProductoById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Producto[]> => {
        try {
            const data = await this.ProductoBusiness.deleteProductoById(
                req.params.id
            );

            response.success(res, data, 200, "Everyproducto is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default ProductoNetwork;
