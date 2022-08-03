import Repository from "@/interfaces/common/repository.interface";
import Ingrediente from "@/interfaces/Entities/Ingrediente/ingrediente.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class IngredienteRepository implements Repository {
    public entityName = "ingrediente";
    public entityId = "id_ingrediente";

    /**
     * Get list of ingredientes
     */
    public async getIngredientes(): Promise<any | Ingrediente[]> {
        try {
            const conn = await connect();
            const ingredientes = await conn.query(
                querys.getAllRows(this.entityName)
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
                querys.searchById(this.entityName, id, this.entityId)
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
                `INSERT INTO ${this.entityName} SET ?`,
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
                `UPDATE ${this.entityName} SET ? WHERE ${this.entityId} = ?`,
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
                querys.deleteById(this.entityName, id, this.entityId)
            );

            return deletedIngrediente;
        } catch (e) {
            throw e;
        }
    }
}

export default IngredienteRepository;
