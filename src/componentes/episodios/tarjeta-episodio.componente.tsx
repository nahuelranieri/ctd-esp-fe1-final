import './tarjeta-episodio.css';
import { useEffect, useState } from "react";
import { Episode } from '../../types/personaje.types';
interface Props{
    urlEpisode:string,
}

/**
 * @typedef {object} eposodio
 * @property {number} id
 * @property {string} name
 * @property {string} air_date
 * @property {string} episode
 * @property {array.<string>} characters
 * @property {string} url
 * @property {string} created
 */


/**
 * @type {episodio}
 */
const inicialState:Episode = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters:[],
    url: '',
    created: ''
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ( {urlEpisode}:Props) => {
    const [episodio, setEpisodio] = useState(inicialState)

    /**
     * Funcion que le pega a la api de episodios de rick and morty
     * https://rickandmortyapi.com/api/episoded
     * @async
     * @param {string} url Se ingresa la url entera que le pega a la api del episodio
     * @returns {object} 
     */
    const apiEpisodios = async (url:string) => {
        const response = await fetch(url);
        const data = await response.json();
        setEpisodio(data)
        return data
    }
    

    useEffect(() => {
        apiEpisodios(urlEpisode)
    }, [])

    
    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {episodio.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;