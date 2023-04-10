import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import Personaje from '../../types/personaje.types';
import { favs } from '../../redux/slice';
// import PropTypes from "prop-types"
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
interface Props{
    isFavBtn:boolean,
    onClick:Personaje 
}

const BotonFavorito = ({isFavBtn, onClick}:Props) => {
    const src = isFavBtn ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useAppDispatch();
    const favAction = (personaje: Personaje)=>{
        dispatch(favs(personaje))
    }
    return <div className="boton-favorito" onClick={()=>favAction(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;