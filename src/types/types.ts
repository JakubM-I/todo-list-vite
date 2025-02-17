import { CategoryGroup, DataGroup } from "./interfaces";

export type SortType = "date" | "category";

export type ReturnedGroupedTasks = {
    groups: DataGroup[] | CategoryGroup[]
} | undefined;