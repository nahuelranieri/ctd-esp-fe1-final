import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { borrarFavs } from "../redux/slice";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favsPersonajes = useAppSelector((state) => state.personaje.favoritos);

    const dispatch = useAppDispatch();
    const borrar = () => {
        dispatch(borrarFavs());
    };

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger" onClick={() => borrar()}>
                    Borrar Favoritos
                </button>
            </div>
            <GrillaPersonajes personajes={favsPersonajes} />
        </div>
    );
};

export default PaginaFavoritos