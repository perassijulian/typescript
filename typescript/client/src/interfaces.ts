export type Todo = {
    id: number,
    text: string,
    done: boolean,
    place?: Place,
}

export type Place = 'Home' | 'Work' | { custom: string };

export {};