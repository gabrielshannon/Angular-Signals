import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "src/interfaces";

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    toDosSig = signal<TodoInterface[]>([])
    
    addTodo(text: string): void{
        const newTodo: TodoInterface={
            text,
            isCompleted: false,
            id: Math.random().toString(16),
    

        }

        this.toDosSig.update((todos) =>[...todos, newTodo])
    }
}