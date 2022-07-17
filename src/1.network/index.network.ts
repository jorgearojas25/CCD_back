import CompraNetwork from "@/network/compra.network";
import FacturaNetwork from "@/network/factura.network";
import Ingrediente_menuNetwork from "@/network/ingrediente_menu.network";
import IngredienteNetwork from "@/network/ingrediente.network";
import MenuNetwork from "@/network/menu.network";
import Producto_menuNetwork from "@/network/producto_menu.network";
import ProductoNetwork from "@/network/producto.network";
import RestauranteNetwork from "@/network/restaurante.network";
import RolNetwork from "@/network/rol.network";
import Tipo_productoNetwork from "@/network/tipo_producto.network";
import UsuarioNetwork from "@/network/usuario.network";

const Network = [
    new CompraNetwork(),
    new FacturaNetwork(),
    new Ingrediente_menuNetwork(),
    new IngredienteNetwork(),
    new MenuNetwork(),
    new Producto_menuNetwork(),
    new ProductoNetwork(),
    new RestauranteNetwork(),
    new RolNetwork(),
    new Tipo_productoNetwork(),
    new UsuarioNetwork(),
];

export default Network;
