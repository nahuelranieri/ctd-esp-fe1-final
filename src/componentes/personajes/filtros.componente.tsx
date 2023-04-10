import './filtros.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actionBusqueda, getPersonajesAll } from '../../redux/slice';

const Filtros = () => {
    const dispatch = useAppDispatch()
    const value = useAppSelector(state => state.personaje.busqueda)
    const search = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(actionBusqueda(e.target.value))
        dispatch(getPersonajesAll(e.target.value))
    }
    return (
      <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nombre"
          value={value}
          onChange={(e) => search(e)}
        />
      </div>
    );
}

export default Filtros;