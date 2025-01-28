export interface Task {
    id: string,
    taskName: string,
    taskDesc?: string,
    taskPriority?: string,
    taskDate?: string,
    taskCategory?: string,
    taskDone: false | true,
    taskVisibility: false | true,
}