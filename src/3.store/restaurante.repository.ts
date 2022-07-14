import Repository from "@/interfaces/common/repository.interface";
import Restaurante from "@/interfaces/Entities/Restaurante/restaurante.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class RestauranteRepository implements Repository {
    public entitieName = "restaurante";

    /**
     * Get list of restaurantes
     */
    public async getRestaurantes(): Promise<any | Restaurante[]> {
        try {
            const conn = await connect();
            const restaurantes = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return restaurantes[0];
        } catch (e) {
            throw new Error("Unable to get restaurantes");
        }
    }

    /**
     * Get one restaurante by Id field
     * @param id restaurante Id
     */
    public async getRestauranteById(id: any): Promise<any | Restaurante[]> {
        try {
            const conn = await connect();
            const restaurantes = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return restaurantes[0];
        } catch (e) {
            throw new Error("Unable to get restaurantes");
        }
    }

    /**
     * Add one restaurante
     * @param restaurante Insert data
     */
    public async postRestaurante(restaurante: Restaurante): Promise<any> {
        try {
            const conn = await connect();
            const newRestaurante = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                restaurante
            );

            return newRestaurante;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one restaurante
     * @param restaurante Data for update restaurantes
     * @returns information of the updated restaurante
     */
    public async updateRestauranteById(restaurante: Restaurante): Promise<any> {
        try {
            const { id_restaurante } = restaurante;
            const conn = await connect();
            const updatedRestaurante = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [restaurante, id_restaurante]
            );

            return updatedRestaurante;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one restaurante by his Id
     * @param id Id of the restaurante to delete
     * @returns
     */
    public async deleteRestauranteById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedRestaurante = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedRestaurante;
        } catch (e) {
            throw e;
        }
    }
}

export default RestauranteRepository;
