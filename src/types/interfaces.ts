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

export interface PrimaryButtonProps {
    title: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
}

export interface InputDateProps {
    taskData: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputSelectProps {
    taskData: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactElement;
}

export interface PageSectionProps {
    title?: string;
    body?: React.ReactElement;
    headerMenu?: React.ReactElement;
    menu?: React.ReactElement;
}

export interface PopupModalProps {
    title: string;
    body: React.ReactElement;
}

export interface MenuRoutesUrl {
    id: number;
    name: string;
    url: string;
}