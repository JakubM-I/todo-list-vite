import PageSection from "../../common/PageSection";
import ButtonMenu from "./ButtonMenu";
import CategoryListWrapper from "./CategoryListWrapper";

const CategoryApp: React.FC = () => {
    return (
        <div>
            <PageSection
                title="Kategorie"
                headerMenu={<ButtonMenu />}
                body={<CategoryListWrapper />}
            />
        </div>
    )
};

export default CategoryApp;