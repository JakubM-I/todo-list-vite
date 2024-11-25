import PageSection from "../../common/PageSection";
import CategoryList from "./CategoryList"

const CategoryApp = () => {

    return(
        <div>
        <PageSection 
            title="Kategorie"
            body={<CategoryList />}
       />
    </div>
    )
}

export default CategoryApp;