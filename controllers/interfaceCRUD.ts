export interface CRUD<T> {
    push(req: any, res: any): void
    pop(req: any, res: any): void
    getAll(req: any, res: any): void
}