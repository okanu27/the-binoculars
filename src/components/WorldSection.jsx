import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const WorldSection = () => {

    const worldStories = articles.filter(
        (article) => article.category === "World"
    )

  return (
    <section className="border-b border-black/10 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Around the Globe
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              World
            </h2>
          </div>

          <Link
            to="/world"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            View All →
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">

          {worldStories.slice(0).map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={index === 0 ? "lg:row-span-1" : ""}
            >
              <Link 
                    to={`/article/${story.slug}`}
                    className="group block"
                >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0
                        ? "h-[360px] md:h-[420px]"
                        : "h-[260px] md:h-[300px]"
                    }`}
                  />
                </div>

                {/* Story Info */}
                <div className="pt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {story.category}
                  </p>

                  <h3
                    className={`font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500 ${
                      index === 0
                        ? "text-2xl md:text-3xl"
                        : "text-xl"
                    }`}
                  >
                    {story.title}
                  </h3>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider">
                    Read Story →
                  </p>
                </div>

              </Link>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default WorldSection;
