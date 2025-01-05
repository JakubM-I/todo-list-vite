import PageSection from "../../common/PageSection";
import ButtonMenu from "./ButtonMenu";
import CategoryList from "./CategoryList"

const CategoryApp = () => {
    return(
        <div>
            <PageSection 
                title="Kategorie"
                headerMenu={<ButtonMenu />}
                body={<CategoryList />}
            />
        </div>
    )
};

export default CategoryApp;