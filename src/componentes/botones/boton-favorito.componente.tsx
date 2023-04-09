import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { Personaje } from '../../types/personaje.types';
import { favoritos } from '../../redux/slice';
import PropTypes from "prop-types"
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
        dispatch(favoritos(personaje))
    }
    return <div className="boton-favorito" onClick={()=>favAction(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;   
BotonFavorito.propTypes ={
    isFavBtn: PropTypes.bool.isRequired,
    onClick: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.string,
        species:PropTypes.string,
        type:PropTypes.string,
        gender:PropTypes.string,
        origin:PropTypes.object,
        location:PropTypes.object,
        image:PropTypes.string,
        episode:PropTypes.arrayOf(PropTypes.string)
    }),
}