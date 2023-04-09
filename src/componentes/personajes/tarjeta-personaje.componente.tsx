import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
// import {  useNavigate } from 'react-router-dom';
import {  useAppSelector } from '../../redux/hooks';
import { Personaje } from '../../types/personaje.types';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
interface Props{
    personaje:Personaje
}

const TarjetaPersonaje = ({personaje}:Props) => {
    const favsStore = useAppSelector(state => state.personaje.favoritos)
    // const navigate = useNavigate();
    const isFav = favsStore.find(item => item.id === personaje.id)
    /* const detalle = (personaje:Personaje)=>{
        navigate(`/detalle/${personaje.id}`)
    } */
    
    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        {/* <img src={personaje.image} alt={personaje.name} onClick={()=>detalle(personaje)}/> */}
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito isFavBtn={isFav?true:false} onClick={personaje} />
        </div>
    </div>
}

export default TarjetaPersonaje;