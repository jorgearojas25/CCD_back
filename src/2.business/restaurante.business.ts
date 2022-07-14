import RestauranteRepository from "@/store/restaurante.repository";
import Restaurante from "@/interfaces/Entities/Restaurante/restaurante.interface";

class RestauranteBusiness {
    private RestauranteRepository = new RestauranteRepository();

    public listRestaurantes = async (): Promise<Restaurante[] | void> => {
        try {
            const restaurantes =
                await this.RestauranteRepository.getRestaurantes();

            return restaurantes;
        } catch (e) {
            throw e;
        }
    };

    public searchRestauranteById = async (
        id: any
    ): Promise<Restaurante[] | void> => {
        try {
            const restaurantes =
                await this.RestauranteRepository.getRestauranteById(id);

            return restaurantes;
        } catch (e) {
            throw e;
        }
    };

    public addRestaurante = async (
        restaurante: Restaurante
    ): Promise<Restaurante[] | void> => {
        try {
            const result = await this.RestauranteRepository.postRestaurante(
                restaurante
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateRestaurante = async (
        restaurante: Restaurante
    ): Promise<Restaurante[] | void> => {
        try {
            const result =
                await this.RestauranteRepository.updateRestauranteById(
                    restaurante
                );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteRestauranteById = async (
        id: any
    ): Promise<Restaurante[] | void> => {
        try {
            const restaurantes =
                await this.RestauranteRepository.deleteRestauranteById(id);

            return restaurantes;
        } catch (e) {
            throw e;
        }
    };
}

export default RestauranteBusiness;
