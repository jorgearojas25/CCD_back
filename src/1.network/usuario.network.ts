import Usuario from "@/interfaces/Entities/Usuario/usuario.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Usuario/usuario.validation";
import UsuarioBusiness from "@/business/usuario.business";
import response from "@/utils/response";

class UsuarioNetwork implements Controller {
    public path = "/usuario";
    public router = Router();
    private UsuarioBusiness = new UsuarioBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of usuarios
         */
        this.router.get(`${this.path}`, this.listUsuarios);

        /**
         * Get usuario by Id
         */
        this.router.get(`${this.path}/:id`, this.searchUsuarioById);

        /**
         * Login method
         */
        this.router.post(`${this.path}/login`, this.login);

        /**
         * Create one Usuario
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.usuarioValidation),
            this.addUsuario
        );

        /**
         * Update one Usuario
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.usuarioValidation),
            this.updateUsuario
        );

        /**
         * Delete usuario by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteUsuarioById);
    }

    //* Network Methods

    private listUsuarios = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.listUsuarios();

            response.success(res, data, 200, "Everyusuario is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchUsuarioById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.searchUsuarioById(
                req.params.id
            );

            response.success(res, data, 200, "Everyusuario is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addUsuario = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.addUsuario(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateUsuario = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.updateUsuario(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteUsuarioById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.deleteUsuarioById(
                req.params.id
            );

            response.success(res, data, 200, "Everyusuario is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Usuario[]> => {
        try {
            const data = await this.UsuarioBusiness.login(
                req.body.document,
                req.body.password
            );

            response.success(res, data, 200, "Everyusuario is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default UsuarioNetwork;
