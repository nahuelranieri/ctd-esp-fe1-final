export interface Personaje {
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

