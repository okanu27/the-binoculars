import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SportsSection = () => {

    const sportStories = articles.filter(
        (article) => article.category === "Sports"
    )

  return (
    <section className="border-b border-white/10 bg-[#111111] px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-white/20 pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Football • Sport • Competition
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              Sports
            </h2>
          </div>

          <Link
            to="/sports"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            View All →
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">

          {sportStories.slice(0).map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <a href="sports" className="group block">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0
                        ? "h-[360px] md:h-[500px]"
                        : "h-[360px] md:h-[500px]"
                    }`}
                  />
                </div>

                {/* Story Info */}
                <div className="pt-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {story.category}
                  </p>

                  <h3
                    className={`font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-400 ${
                      index === 0
                        ? "text-2xl md:text-4xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {story.title}
                  </h3>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Read Story →
                  </p>
                </div>

              </a>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default SportsSection;