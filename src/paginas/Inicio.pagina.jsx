import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { actionBusqueda, getPersonajes } from "../redux/slice";
import { useEffect } from "react";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const personajes = useAppSelector(state => state.personaje.personajes)

    useEffect(() => {
        dispatch(getPersonajes(""))
    }, [dispatch])

    const deleteFilter =()=>{
        dispatch(actionBusqueda(''))
        dispatch(getPersonajes(''))
    }



    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=> deleteFilter()}>Limpiar Filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes personajes={personajes}/>
        <Paginacion />
    </div>
}

export default PaginaInicio