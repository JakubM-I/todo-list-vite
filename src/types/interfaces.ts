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

export interface ExampleData {
    tasks: Task[];
    categories: Category[];
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

export interface PrimaryButtonProps {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button" | undefined;
}

export interface InputDateProps {
    taskData: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputSelectProps {
    taskData: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}

export interface PageSectionProps {
    title?: string;
    body?: React.ReactElement;
    headerMenu?: React.ReactElement;
    menu?: React.ReactElement;
}

export interface OpenElementProps {
    title: string;
    elementType: string;
    data?: Category;
    success?: string;
}

export interface PopupModalProps {
    title: string;
    body: React.ReactElement;
    success?: string;
}

export interface PopupModalSuccessProps {
    success?: string;
}

export interface MenuRoutesUrl {
    id: number;
    name: string;
    url: string;
}

export interface ToggleTaskPriority {
    (taskPriority: string): React.ReactElement | "";
}

export interface EditTaskFormProps {
    editedTask: Task;
    onCancel: () => void;
    onSubmit: (task: Task) => void;
}

export interface CategoryFormProps {
    editedCategory: Category;
}

export interface CategoryHandleEdit {
    (category: Category): void;
}

export interface DataGroup {
    tasks: Task[];
    id: string;
    date: string | undefined;
    label: string;
}

export interface CategoryGroup {
    tasks: Task[];
    id: string;
    category: string | undefined;
    label: string;
}