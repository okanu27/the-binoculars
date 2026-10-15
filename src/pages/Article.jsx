import React, { useEffect} from "react";
import {supabase} from "../lib/supabase";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

const Article = () => {
    const { slug } = useParams()

    const article = articles.find(
        (article) => article.slug === slug
    )

    useEffect(() => { 
      if (!article?.slug) return;

      const storageKey = `viewed_article_${article.slug}`;

      // Check if the article has already been viewed in this session
      if (sessionStorage.getItem(storageKey)) return;

      // Increment the view count in Supabase.
      sessionStorage.setItem(storageKey, "true");

      const recordView = async () => {
        const { error } = await supabase.rpc("record_article_view", { 
          p_article_slug: article.slug, 
        });

        if (error) {
          // Handle the error appropriately (e.g., log it, show a notification, Allow a retry if the request fails.)
          sessionStorage.removeItem(storageKey); // Remove the key if there's an error
          console.error("Error recording article view:", error.message);
        }
      };

      recordView();
    }, [article?.slug]);

    const relatedStories = articles.filter(
        (story) => 
            story.category === article?.category &&
            story.id !== article?.id
        )

        const categoryRoutes = {
            "World": "/world",
            "Politics": "/politics",
            "Business": "/business",
            "Technology": "/technology-science",
            "Science": "/technology-science",
            "Sports": "/sports",
            "Culture": "/culture-entertainment",
            "Entertainment": "/culture-entertainment"
        }

    if (!article) {
        return (
            <main className="min-h-screen bg-[#111111] px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                        The Binoculars
                    </p>

                    <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                        Article not found
                    </h1>

                    <p className="mt-4 text-gray-400">
                        The story you are looking for does not exist.
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#111111] px-6 py-10">
        <article className="mx-auto max-w-4xl">

        <Link 
            to={categoryRoutes[article.category] || "/"}
            className="mb-8 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white"
        >
                ← Back to {["Technology", "Science"].includes(article.category) 
                ? "Technology & Science" 
                : article.category}
        </Link>
      
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
        {article.category}
      </p>

      <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
        {article.title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        {article.excerpt}
      </p>

      <div className="mt-6 flex gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">
        <span>{article.author}</span>
        <span>·</span>
        <span>{article.date}</span>
        <span>.</span>
        <span>{article.readTime}</span>
      </div>

      <div className="mt-10 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-[420px] w-full object-cover md:h-[560px]"
        />
      </div>

      <div className="mt-10 space-y-6 text-base leading-8 text-gray-300 md:text-lg md:leading-9">
        {article.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Article Sources */}
  {article.sources?.length > 0 && (
  <section className="mt-12 border-t border-white/10 pt-8">
    <h2 className="mb-2 text-2xl font-bold text-white">
      Sources & References
    </h2>

    <p className="mb-6 text-sm leading-6 text-gray-400">
      This article draws on reporting and information from the following
      sources.
    </p>

    <ul className="space-y-3">
      {article.sources.map((source, index) => (
        <li
          key={source.url || `${source.name}-${index}`}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/50"
        >
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 text-gray-200 transition hover:text-blue-400"
          >
            <span className="font-medium">
              {source.name}
            </span>

            <span
              className="shrink-0 text-sm text-blue-400"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <p className="mt-2 text-xs text-gray-500">
            Opens the original source in a new tab.
          </p>
        </li>
      ))}
    </ul>
  </section>
)}

    {/* Related Stories Section */}
      {relatedStories.length > 0 && (
  <section className="mt-20 border-t border-white/10 pt-10">
    <div className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
        Continue Reading
      </p>

      <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
        More from {article.category}
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {relatedStories.slice(0, 2).map((story) => (
        <Link
          key={story.id}
          to={`/article/${story.slug}`}
          className="group block"
        >
          <div className="overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {story.category}
          </p>

          <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-gray-300">
            {story.title}
          </h3>
        </Link>
      ))}
    </div>
  </section>
)}

    </article>
  </main>
)
}

export default Article;