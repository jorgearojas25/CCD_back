import RolRepository from "@/store/rol.repository";
import Rol from "@/interfaces/Entities/Rol/rol.interface";

class RolBusiness {
    private RolRepository = new RolRepository();

    public listRols = async (): Promise<Rol[] | void> => {
        try {
            const rols = await this.RolRepository.getRols();

            return rols;
        } catch (e) {
            throw e;
        }
    };

    public searchRolById = async (id: any): Promise<Rol[] | void> => {
        try {
            const rols = await this.RolRepository.getRolById(id);

            return rols;
        } catch (e) {
            throw e;
        }
    };

    public addRol = async (rol: Rol): Promise<Rol[] | void> => {
        try {
            const result = await this.RolRepository.postRol(rol);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateRol = async (rol: Rol): Promise<Rol[] | void> => {
        try {
            const result = await this.RolRepository.updateRolById(rol);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteRolById = async (id: any): Promise<Rol[] | void> => {
        try {
            const rols = await this.RolRepository.deleteRolById(id);

            return rols;
        } catch (e) {
            throw e;
        }
    };
}

export default RolBusiness;
