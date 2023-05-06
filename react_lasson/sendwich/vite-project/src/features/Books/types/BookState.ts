interface Book{
    id:string,
    title: string,
    year:number,
    author:string;
}
export default interface BooksState{
    books: Book[]
}