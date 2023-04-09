import { Personaje } from "../types/personaje.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const api = 'https://rickandmortyapi.com/api/'

const apiPersonajes = async (filter:string) => {
    const response = await fetch(`${api}character/${filter? '?name='+ filter : ''}`);
    if(response.ok){
        const data = await response.json();
        return data
    }else{
        throw new Error("No hay personajes con el nombre que buscas, intenta otra cosa.");
    }
}
const apiPaginacion = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}
const apiOnePersonaje = async (id:string) => {
    const response = await fetch(`${api}character/${id}`);
    if(response.ok){
        const data = await response.json();
        return data
    }else{
        throw new Error("No se encontro ese Personaje");
    }
}


export const getPersonajes = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {
        const response = await apiPersonajes(name)
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
export const getOnePersonaje = createAsyncThunk(
    '/getOnePersonaje',
    async (id: string) => {
        const response = await apiOnePersonaje(id)
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
    selected: Personaje,
    errorBusqueda: string | undefined

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
        status: '',
        species:'',
        type:'',
        gender:'',
        origin:{
            name:'',
            url:''
        },
        location:{
            name:'',
            url:''
        },
        image:'',
        episode:[]
    },
    errorBusqueda:''

}

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        },
        favoritos: (state, action) => {
            if(!state.favoritos.find(item => item.id === action.payload.id)){
                state.favoritos.push(action.payload)
            }else{
                state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
            }
        },
        deleteAllfavoritos: (state) => {
            state.favoritos = initialState.favoritos
        },
        actionSelected: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
            state.errorBusqueda = initialState.errorBusqueda
        })
        builder.addCase(getPersonajes.rejected, (state, action) => {
            state.errorBusqueda = action.error.message
        })
        builder.addCase(getPaginacion.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
        })
        builder.addCase(getOnePersonaje.fulfilled, (state, action) => {
            state.selected = action.payload
            state.errorBusqueda = initialState.errorBusqueda
        })
        builder.addCase(getOnePersonaje.rejected, (state, action) => {
            state.errorBusqueda = action.error.message
        })
    },

})

export const { actionBusqueda,favoritos, deleteAllfavoritos, actionSelected } = personajesSlice.actions


export default personajesSlice.reducer