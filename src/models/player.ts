export interface Player {
    id: string;
    name: string;
    surname: string;
    position: string;
    years: number;
    imageLinks?:{
        thumbnail: string;
        smallThumbnail: string;
    };
}