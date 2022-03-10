export type Todo = Readonly<{
    id: number,
    text: string,
    done: boolean,
    place?: Place,
}>

export type Place = 'Home' | 'Work' | { custom: string };

export {};