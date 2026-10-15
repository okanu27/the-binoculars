import CategoryPage from "../components/CategoryPage";
import { sections } from "../data/sections.js";

const CultureEntertainment = () => {
    const section = sections["culture-entertainment"];

    return (
        <CategoryPage
            title={section.title}
            categories={section.categories}
        />
    )
}

export default CultureEntertainment;