export interface TodoConfig {
    title: string
    completed: boolean
}

export interface State {
    newTodo: string | null
    todos: TodoConfig[]
}