import Repository from "@/interfaces/common/repository.interface";
import Ingrediente from "@/interfaces/Entities/Ingrediente/ingrediente.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class IngredienteRepository implements Repository {
    public entitieName = "ingrediente";

    /**
     * Get list of ingredientes
     */
    public async getIngredientes(): Promise<any | Ingrediente[]> {
        try {
            const conn = await connect();
            const ingredientes = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return ingredientes[0];
        } catch (e) {
            throw new Error("Unable to get ingredientes");
        }
    }

    /**
     * Get one ingrediente by Id field
     * @param id ingrediente Id
     */
    public async getIngredienteById(id: any): Promise<any | Ingrediente[]> {
        try {
            const conn = await connect();
            const ingredientes = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return ingredientes[0];
        } catch (e) {
            throw new Error("Unable to get ingredientes");
        }
    }

    /**
     * Add one ingrediente
     * @param ingrediente Insert data
     */
    public async postIngrediente(ingrediente: Ingrediente): Promise<any> {
        try {
            const conn = await connect();
            const newIngrediente = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                ingrediente
            );

            return newIngrediente;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one ingrediente
     * @param ingrediente Data for update ingredientes
     * @returns information of the updated ingrediente
     */
    public async updateIngredienteById(ingrediente: Ingrediente): Promise<any> {
        try {
            const { id_ingrediente } = ingrediente;
            const conn = await connect();
            const updatedIngrediente = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [ingrediente, id_ingrediente]
            );

            return updatedIngrediente;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one ingrediente by his Id
     * @param id Id of the ingrediente to delete
     * @returns
     */
    public async deleteIngredienteById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedIngrediente = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedIngrediente;
        } catch (e) {
            throw e;
        }
    }
}

export default IngredienteRepository;
