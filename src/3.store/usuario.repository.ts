import Repository from "@/interfaces/common/repository.interface";
import Usuario from "@/interfaces/Entities/Usuario/usuario.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class UsuarioRepository implements Repository {
    public entityName = "usuario";
    public entityId = "id_usuario";

    /**
     * Get list of usuarios
     */
    public async getUsuarios(): Promise<any | Usuario[]> {
        try {
            const conn = await connect();
            const usuarios = await conn.query(
                querys.getAllRows(this.entityName)
            );

            return usuarios[0];
        } catch (e) {
            throw new Error("Unable to get usuarios");
        }
    }

    /**
     * Get one usuario by Id field
     * @param id usuario Id
     */
    public async getUsuarioById(id: any): Promise<any | Usuario[]> {
        try {
            const conn = await connect();
            const usuarios = await conn.query(
                querys.searchById(this.entityName, id, this.entityId)
            );

            return usuarios[0];
        } catch (e) {
            throw new Error("Unable to get usuarios");
        }
    }

    /**
     * Add one usuario
     * @param usuario Insert data
     */
    public async postUsuario(usuario: Usuario): Promise<any> {
        try {
            const conn = await connect();
            const newUsuario = await conn.query(
                `INSERT INTO ${this.entityName} SET ?`,
                usuario
            );

            return newUsuario;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one usuario
     * @param usuario Data for update usuarios
     * @returns information of the updated usuario
     */
    public async updateUsuarioById(usuario: Usuario): Promise<any> {
        try {
            const { id_usuario } = usuario;
            const conn = await connect();
            const updatedUsuario = await conn.query(
                `UPDATE ${this.entityName} SET ? WHERE id = ?`,
                [usuario, id_usuario]
            );

            return updatedUsuario;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one usuario by his Id
     * @param id Id of the usuario to delete
     * @returns
     */
    public async deleteUsuarioById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedUsuario = await conn.query(
                querys.deleteById(this.entityName, id, this.entityId)
            );

            return deletedUsuario;
        } catch (e) {
            throw e;
        }
    }
}

export default UsuarioRepository;
