import IngredienteRepository from "@/store/ingrediente.repository";
import Ingrediente from "@/interfaces/Entities/Ingrediente/ingrediente.interface";

class IngredienteBusiness {
    private IngredienteRepository = new IngredienteRepository();

    public listIngredientes = async (): Promise<Ingrediente[] | void> => {
        try {
            const ingredientes =
                await this.IngredienteRepository.getIngredientes();

            return ingredientes;
        } catch (e) {
            throw e;
        }
    };

    public searchIngredienteById = async (
        id: any
    ): Promise<Ingrediente[] | void> => {
        try {
            const ingredientes =
                await this.IngredienteRepository.getIngredienteById(id);

            return ingredientes;
        } catch (e) {
            throw e;
        }
    };

    public addIngrediente = async (
        ingrediente: Ingrediente
    ): Promise<Ingrediente[] | void> => {
        try {
            const result = await this.IngredienteRepository.postIngrediente(
                ingrediente
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateIngrediente = async (
        ingrediente: Ingrediente
    ): Promise<Ingrediente[] | void> => {
        try {
            const result =
                await this.IngredienteRepository.updateIngredienteById(
                    ingrediente
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteIngredienteById = async (
        id: any
    ): Promise<Ingrediente[] | void> => {
        try {
            const ingredientes =
                await this.IngredienteRepository.deleteIngredienteById(id);

            return ingredientes;
        } catch (e) {
            throw e;
        }
    };
}

export default IngredienteBusiness;
