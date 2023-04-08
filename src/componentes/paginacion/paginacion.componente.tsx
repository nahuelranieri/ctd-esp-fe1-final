import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPaginacion } from '../../redux/slice';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch();
    const storePag = useAppSelector(state => state.personaje.paginacion)
    const antPag = ()=>{
        dispatch(getPaginacion(storePag.anterior))
    }
    const sigPag = ()=>{
        dispatch(getPaginacion(storePag.siguiente))
    }
    
    return <div className="paginacion">
        <button disabled={!storePag.anterior} className={"primary"} onClick={()=> antPag()}>Anterior</button>
        <button disabled={!storePag.siguiente} className={"primary"} onClick={()=> sigPag()}>Siguiente</button>
    </div>
}

export default Paginacion;