export interface TodoConfig {
    title: string
    completed: boolean
}

export interface TodoState {
    newTodo: string | null
    todos: TodoConfig[]
}
