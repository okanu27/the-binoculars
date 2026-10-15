import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const TechnologySection = () => {
  const techStories = articles.filter(
    (article) =>
      article.category === "Science" ||
      article.category === "Technology"
  )

  const featuredStory = techStories[0]
  const supportingStories = techStories.slice(1)

  if (!featuredStory) {
    return null
  }

  return (
    <section className="border-b border-black/10 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Innovation • AI • Digital
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              Science & Technology
            </h2>
          </div>

          <Link
            to="/technology-science"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-500 transition-colors hover:text-black"
          >
            View All →
          </Link>
        </div>

        {/* Featured Story */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            to={`/article/${featuredStory.slug}`}
            className="group block"
          >
            <div className="overflow-hidden">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]"
              />
            </div>

            <div className="pt-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                {featuredStory.category}
              </p>

              <h3 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-gray-500 md:text-5xl">
                {featuredStory.title}
              </h3>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider">
                Read Story →
              </p>
            </div>
          </Link>
        </motion.article>

        {/* Supporting Stories */}
        <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-2">
          {supportingStories.map((story, index) => (
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
            >
              <Link
                to={`/article/${story.slug}`}
                className="group grid gap-5 sm:grid-cols-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {story.category}
                  </p>

                  <h3 className="text-xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider">
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

export default TechnologySection;