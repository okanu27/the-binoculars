import { articles } from "../data/articles";
import { Link } from "react-router-dom";



const Hero = () => {

    const featuredStory = articles[0];
    return (
        <section className="border-b border-black/10 px-6 py-10 md:py-16">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">

                {/* Story Content */}
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                        {featuredStory.category}
                    </p>

                    <h2 className="text-4xl font-black leading-[0.95] tracking-[0.03em] md:text-6xl">
                        {featuredStory.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
                        {featuredStory.excerpt}
                    </p>

                    <Link 
                        to="/world"
                        className="mt-7 inline-flex items-center border border-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-black">
                            Read Story
                            <span className="ml-4 text-base">→</span>
                    </Link>
                </div>

                {/*Story Image*/}
                <div className="overflow-hidden">
                    <img
                        src={featuredStory.image}
                        alt={featuredStory.title}
                        className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[500px]" />
                </div>
            </div>
        </section>
    )
}

export default Hero;