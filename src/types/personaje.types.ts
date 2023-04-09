/*export interface Personaje {
    id: number;
    name: string;
    status: string;
    image: string;
    type: string;
    species: string;
    gender: string;
    origin: {
        name: string,
        url: string
    }
    episode: string[];
}
*/
export interface Personaje{
    id: number,
    name: string,
    status: string,
    species:string,
    type:string,
    gender:string,
    origin:{
        name:string,
        url:string
    },
    location:{
        name:string,
        url:string
    },
    image:string,
    episode:string[]
}

export interface Episode{
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}
