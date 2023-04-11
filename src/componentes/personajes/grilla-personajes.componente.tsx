import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import Personaje from '../../types/personaje.types';
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
interface Props {
    personajes: Personaje[];
}

const GrillaPersonajes = ({ personajes }: Props) => {
    return (
        <div className="grilla-personajes">
            {personajes &&
                personajes.map((personaje) => (
                    <TarjetaPersonaje
                        personaje={personaje}
                        key={personaje.id.toString()}
                    />
                ))}
        </div>
    );
};
 
export default GrillaPersonajes;