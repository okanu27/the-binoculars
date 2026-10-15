import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const PoliticsSection = () => {

    const politticsStories = articles.filter(
        (article) => article.category === "Politics"
    )

  return (
    <section className="border-b border-black/10 bg-[#111111] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Government • Policy • Global Affairs
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              Politics
            </h2>
          </div>

          <Link
            to="/politics"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            View All →
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* Featured Story */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a href="politics" className="group block">

              <div className="overflow-hidden">
                <img
                  src={politticsStories[0].image}
                  alt={politticsStories[0].title}
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]"
                />
              </div>

              <div className="pt-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {politticsStories[0].category}
                </p>

                <h3 className="max-w-3xl text-2xl font-black leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500 md:text-4xl">
                  {politticsStories[0].title}
                </h3>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-wider">
                  Read Story →
                </p>
              </div>

            </a>
          </motion.article>

          {/* Supporting Stories */}
          <div className="flex flex-col gap-8">

            {politticsStories.slice(0).map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <a href="politics" className="group block">

                  <div className="overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      {story.category}
                    </p>

                    <h3 className="text-xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500">
                      {story.title}
                    </h3>

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-wider">
                      Read Story →
                    </p>
                  </div>

                </a>
              </motion.article>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default PoliticsSection;