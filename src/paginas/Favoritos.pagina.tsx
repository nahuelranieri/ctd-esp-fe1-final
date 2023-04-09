import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../redux/hooks";
/*import { deleteAllfavoritos } from "../redux/slice";*/
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    
    const favsPersonajes = useAppSelector(state => state.personaje.favoritos)

    /**
     * const dispatch = useAppDispatch()
    const deleteAll = ()=>{
        dispatch(deleteAllfavoritos())
     */
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes personajes={favsPersonajes} />
    </div>
}

export default PaginaFavoritos