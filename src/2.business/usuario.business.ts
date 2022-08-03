import UsuarioRepository from "@/store/usuario.repository";
import Usuario from "@/interfaces/Entities/Usuario/usuario.interface";

class UsuarioBusiness {
    private UsuarioRepository = new UsuarioRepository();

    public listUsuarios = async (): Promise<Usuario[] | void> => {
        try {
            const usuarios = await this.UsuarioRepository.getUsuarios();

            return usuarios;
        } catch (e) {
            throw e;
        }
    };

    public searchUsuarioById = async (id: any): Promise<Usuario[] | void> => {
        try {
            const usuarios = await this.UsuarioRepository.getUsuarioById(id);

            return usuarios;
        } catch (e) {
            throw e;
        }
    };

    public addUsuario = async (usuario: Usuario): Promise<Usuario[] | void> => {
        try {
            const result = await this.UsuarioRepository.postUsuario(usuario);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateUsuario = async (
        usuario: Usuario
    ): Promise<Usuario[] | void> => {
        try {
            const result = await this.UsuarioRepository.updateUsuarioById(
                usuario
            );

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteUsuarioById = async (id: any): Promise<Usuario[] | void> => {
        try {
            const usuarios = await this.UsuarioRepository.deleteUsuarioById(id);

            return usuarios;
        } catch (e) {
            throw e;
        }
    };

    public login = async (
        document: string,
        password: string
    ): Promise<Usuario[] | void> => {
        try {
            const user = await this.UsuarioRepository.login(document, password);

            return user;
        } catch (e) {
            throw e;
        }
    };
}

export default UsuarioBusiness;
