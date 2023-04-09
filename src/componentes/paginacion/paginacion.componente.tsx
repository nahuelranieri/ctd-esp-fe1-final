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
        dispatch(getPaginacion(storePag.prev))
    }
    const sigPag = ()=>{
        dispatch(getPaginacion(storePag.next))
    }
    
    return <div className="paginacion">
        <button disabled={!storePag.prev} className={"primary"} onClick={()=> antPag()}>Anterior</button>
        <button disabled={!storePag.next} className={"primary"} onClick={()=> sigPag()}>Siguiente</button>
    </div>
}

export default Paginacion;