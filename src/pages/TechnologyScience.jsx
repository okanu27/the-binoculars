import CategoryPage from "../components/CategoryPage";
import {sections} from "../data/sections.js";

const TechnologyScience = () => {
    const section = sections["technology-science"];

    return (
        <CategoryPage
            title={section.title}
            categories={section.categories}
        />
    )
}

export default TechnologyScience;