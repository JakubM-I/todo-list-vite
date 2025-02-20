import EmptyList from "../../../common/EmptyList";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { Category } from "../../../types/interfaces";
import CategoryList from "../CategoryList";
import { categorySelector } from "../categorySlice";

const CategoryListWrapper: React.FC = () => {
    const categories: Category[] = useAppSelector(categorySelector);

    return (
        <>
            {categories.length > 0 ? (<CategoryList />) : (<EmptyList body="Dodaj swoją pierwszą kategorię" />)}
        </>
    )
};

export default CategoryListWrapper;