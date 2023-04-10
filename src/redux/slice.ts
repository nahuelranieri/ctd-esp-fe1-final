import Personaje from "../types/personaje.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const api = 'https://rickandmortyapi.com/api/'

const apiPersonajesAll = async (filter:string) => {
    const response = await fetch(`${api}character/${filter? '?name='+ filter : ''}`);
    const data = await response.json();
    return data
}

const apiPersonaje = async (id:string) => {
    const response = await fetch(`${api}character/${id}`);
    const data = await response.json();
    return data
}

const apiPaginacion = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export const getPersonajesAll = createAsyncThunk(
    '/getPersonajesAll',
    async (name: string) => {
        const response = await apiPersonajesAll(name)
        return response
    }
)

export const getPaginacion = createAsyncThunk(
    '/getPaginacion',
    async (url: string) => {
        const response = await apiPaginacion(url)
        return response
    }
)

export const getPersonaje = createAsyncThunk(
    '/getPersonaje',
    async (id: string) => {
        const response = await apiPersonaje(id)
        return response
    }
)

interface initialType {
    busqueda: string,
    personajes: Personaje[],
    paginacion:{
        next:string,
        prev:string
    },
    favoritos: Personaje[],
    selected: Personaje

}

const initialState: initialType = {
    busqueda: '',
    personajes:[],
    paginacion:{
        next:'',
        prev:''
    },
    favoritos:[],
    selected:{
        id: 0,
        name: '',
        image:''
    }

}

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        },
        favs: (state, action) => {
            if(!state.favoritos.find(item => item.id === action.payload.id)){
                state.favoritos.push(action.payload)
            }else{
                state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
            }
        },
        borrarFavs: (state) => {
            state.favoritos = initialState.favoritos
        },
        actionSelected: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonajesAll.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
        })
        builder.addCase(getPaginacion.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
        })
        builder.addCase(getPersonaje.fulfilled, (state, action) => {
            state.selected = action.payload
        })
    },

})

export const { actionBusqueda,favs, borrarFavs, actionSelected } = personajesSlice.actions


export default personajesSlice.reducer