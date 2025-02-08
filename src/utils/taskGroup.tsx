
import { useSearchParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { searchTaskByQuery } from "../features/tasks/taskSlice";
import { configSortTypeSelector } from "../features/configuration/configurationSlice";
import { Task } from "../types/interfaces";
import { useAppSelector } from "../hooks/reduxHooks";

export const groupTask = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("szukaj")
    const tasks: Task[] = useAppSelector(state => searchTaskByQuery(state, query));
    const sortType: string = useAppSelector(configSortTypeSelector);

    if (sortType === "date") {
        const allDatesList = tasks.map(task => ({ id: nanoid(), date: task.taskDate, label: task.taskDate || "" }))

        const sortedDatesList = [...new Map(allDatesList.map((m) => [m.date || "no-date", m]))
            .values()]
            .sort((a, b) => {
                if (!a.date) return -1;
                if (!b.date) return 1;

                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

        const groupedDateTasks = sortedDatesList.map(dataGroup => ({
            ...dataGroup,
            tasks: tasks
                .filter(task => task.taskDate === dataGroup.date)
                .sort((a, b) => Number(a.taskDone) - Number(b.taskDone) || Number(b.taskPriority) - Number(a.taskPriority))
        }));

        return {
            groups: groupedDateTasks
        };
    };

    if (sortType === "category") {
        const allCategoriesList = tasks.map(task => ({ id: nanoid(), category: task.taskCategory, label: task.taskCategory || "" }));
        const sortedCategoryList = [...new Map(allCategoriesList.map((m) => [m.category || "no-category", m]))
            .values()]
            .sort((a, b) => {
                if (!a.category) return -1;
                if (!b.category) return 1;

                return a.category.localeCompare(b.category);
            });

        const groupedCategoryTasks = sortedCategoryList.map(categoryGroup => ({
            ...categoryGroup,
            tasks: tasks
                .filter(task => task.taskCategory === categoryGroup.category)
                .sort((a, b) => Number(a.taskDone) - Number(b.taskDone) || Number(b.taskPriority) - Number(a.taskPriority))
        }));

        return {
            groups: groupedCategoryTasks
        }
    }
};

