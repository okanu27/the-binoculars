import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const CultureSection = () => {

    const cultureStories = articles.filter(
        (article) => 
            article.category === "Culture" ||
            article.category === "Entertainment"
    )

  return (
    <section className="border-b border-black/10 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Arts • Culture • Entertainment
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              Culture & Entertainment
            </h2>
          </div>

          <Link
            to="/culture-entertainment"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            View All →
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-8 md:grid-cols-2">

          {cultureStories.slice(0).map((story, index) => (
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
              <a href="culture & entertainment" className="group block">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[480px]"
                  />
                </div>

                {/* Story Info */}
                <div className="pt-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {story.category}
                  </p>

                  <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500 md:text-3xl">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider">
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

export default CultureSection;