import ProductoRepository from "@/store/producto.repository";
import Producto from "@/interfaces/Entities/Producto/producto.interface";

class ProductoBusiness {
    private ProductoRepository = new ProductoRepository();

    public listProductos = async (): Promise<Producto[] | void> => {
        try {
            const productos = await this.ProductoRepository.getProductos();

            return productos;
        } catch (e) {
            throw e;
        }
    };

    public searchProductoById = async (id: any): Promise<Producto[] | void> => {
        try {
            const productos = await this.ProductoRepository.getProductoById(id);

            return productos;
        } catch (e) {
            throw e;
        }
    };

    public addProducto = async (
        producto: Producto
    ): Promise<Producto[] | void> => {
        try {
            const result = await this.ProductoRepository.postProducto(producto);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateProducto = async (
        producto: Producto
    ): Promise<Producto[] | void> => {
        try {
            const result = await this.ProductoRepository.updateProductoById(
                producto
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteProductoById = async (id: any): Promise<Producto[] | void> => {
        try {
            const productos = await this.ProductoRepository.deleteProductoById(
                id
            );

            return productos;
        } catch (e) {
            throw e;
        }
    };
}

export default ProductoBusiness;
