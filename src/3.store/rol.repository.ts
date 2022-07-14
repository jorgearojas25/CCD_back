import Repository from "@/interfaces/common/repository.interface";
import Rol from "@/interfaces/Entities/Rol/rol.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class RolRepository implements Repository {
    public entitieName = "rol";

    /**
     * Get list of rols
     */
    public async getRols(): Promise<any | Rol[]> {
        try {
            const conn = await connect();
            const rols = await conn.query(querys.getAllRows(this.entitieName));

            return rols[0];
        } catch (e) {
            throw new Error("Unable to get rols");
        }
    }

    /**
     * Get one rol by Id field
     * @param id rol Id
     */
    public async getRolById(id: any): Promise<any | Rol[]> {
        try {
            const conn = await connect();
            const rols = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return rols[0];
        } catch (e) {
            throw new Error("Unable to get rols");
        }
    }

    /**
     * Add one rol
     * @param rol Insert data
     */
    public async postRol(rol: Rol): Promise<any> {
        try {
            const conn = await connect();
            const newRol = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                rol
            );

            return newRol;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one rol
     * @param rol Data for update rols
     * @returns information of the updated rol
     */
    public async updateRolById(rol: Rol): Promise<any> {
        try {
            const { id_rol } = rol;
            const conn = await connect();
            const updatedRol = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [rol, id_rol]
            );

            return updatedRol;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one rol by his Id
     * @param id Id of the rol to delete
     * @returns
     */
    public async deleteRolById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedRol = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedRol;
        } catch (e) {
            throw e;
        }
    }
}

export default RolRepository;
