import { articles } from "../data/articles"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const BusinessSection = () => {

    const businessStories = articles.filter(
        (article) => article.category === "Business"
    )

  return (
    <section className="border-b border-black/10 bg-[#111111] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Money • Markets • Economy
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
              Business
            </h2>
          </div>

          <Link
            to="/business"
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            View All →
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-8 md:grid-cols-3">

          {businessStories.slice(0).map((story, index) => (
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
              <a href="business" className="group block">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[320px]"
                  />
                </div>

                {/* Story Info */}
                <div className="pt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {story.category}
                  </p>

                  <h3 className="text-xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-500 md:text-2xl">
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
    </section>
  )
}

export default BusinessSection;