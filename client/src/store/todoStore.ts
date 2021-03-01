import {makeAutoObservable, makeObservable} from "mobx";

export type TodoType = {
    tasks: Array<TaskType>
    deleteTask: () => void
}



export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

class Todo {
    tasks: Array<TaskType> = [
        {id:1,title: 'React', isDone: false},
        {id:2,title: 'HTML', isDone: false},
        {id:3,title: 'React', isDone: false},
    ]
    constructor() {
        makeAutoObservable(this)
    }

    deleteTask(taskID:number) {
        this.tasks = this.tasks.filter( task => task.id !== taskID)
    }

}

export default  new Todo();
