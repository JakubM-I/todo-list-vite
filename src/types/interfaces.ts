export interface Task {
    id: string;
    taskName: string;
    taskDesc?: string;
    taskPriority?: string;
    taskDate?: string;
    taskCategory?: string;
    taskDone: false | true;
    taskVisibility: false | true;
}

export interface Category {
    categoryId: string;
    categoryName: string;
}

export interface Configuration {
    fetchError: true | false;
    lang: string;
    loading: true | false;
    sortType: string;
}