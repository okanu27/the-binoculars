import { Link } from "react-router-dom"
import { articles } from "../data/articles"


const CategoryPage = ({ category, categories, title }) => {

  const selectedCategories = categories ?? [category];

  const pageTitle = title ?? category;

  const categoryStories = articles.filter(
    (article) => selectedCategories.includes(article.category)
  )

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <Link 
            to={"/"}
            className="mb-7 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white"
        >
                ← Back Home
        </Link>

        <div className="mb-10 border-b border-red-400 pb-4">

          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
            The Binoculars
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            {pageTitle}
          </h1>
        </div>

        {categoryStories.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryStories.map((story) => (
            <Link 
                key={story.id}
                to={`/article/${story.slug}`}
                className="group block"
            >
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {story.category}
                </p>

                <h2 className="text-xl font-bold leading-tight tracking-tight transition-colors duration-300 hover:text-gray-300">
                  {story.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {story.excerpt}
                </p>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  {story.date} · {story.readTime}
                </p>
              </div>
            </Link >
          ))}
        </div>
      ) : (
        <p className="py-10 text-gray-400">
          No stories found for this category.
        </p>
      )}

      </div>
    </main>
  )
}

export default CategoryPage;