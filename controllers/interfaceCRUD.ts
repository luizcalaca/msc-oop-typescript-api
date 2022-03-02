export interface CRUD<T> {
    push(req: Request, res: Response): void
    pop(): T
    getAll(): T[]
}