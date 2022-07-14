import Repository from "@/interfaces/common/repository.interface";
import Usuario from "@/interfaces/Entities/Usuario/usuario.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class UsuarioRepository implements Repository {
    public entitieName = "usuario";

    /**
     * Get list of usuarios
     */
    public async getUsuarios(): Promise<any | Usuario[]> {
        try {
            const conn = await connect();
            const usuarios = await conn.query(
                querys.getAllRows(this.entitieName)
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
                querys.searchById(this.entitieName, id)
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
                `INSERT INTO ${this.entitieName} SET ?`,
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
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
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
                querys.deleteById(this.entitieName, id)
            );

            return deletedUsuario;
        } catch (e) {
            throw e;
        }
    }
}

export default UsuarioRepository;
