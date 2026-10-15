import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

const LatestNews = () => {
    // Latest articles
    const latestArticles = [...articles]
        .filter((article) => article.title && article.slug)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4);

    // Most Read articles
    const [mostRead, setMostRead] = useState([]);
    const [loadingMostRead, setLoadingMostRead] = useState(true);

    useEffect(() => {
        let isMounted = true; // Flag to track if the component is still mounted

        const fetchMostRead = async () => {
            const { data, error } = await supabase
                .from("article_views")
                .select("article_slug, view_count")
                .order("view_count", { ascending: false })
                .limit(5);

            if (error) {
                console.error("Error fetching most read articles:", error.message);
                
                if (isMounted) {
                    setMostRead([]);
                    setLoadingMostRead(false);
                }

                return;

            }

            const articlesBySlug = new Map(
                articles.map((article) => [article.slug, article])
            );

            const rankedArticles = (data || [])
                .map((view) => ({
                    ...articlesBySlug.get(view.article_slug),
                    viewCount: Number(view.view_count),
                }))
                .filter((article) => article.title && article.slug);

            if (isMounted) {
                setMostRead(rankedArticles);
                setLoadingMostRead(false);
            }
        };

        fetchMostRead();

        return () => {
            isMounted = false; // Cleanup function to set the flag to false when the component unmounts
        };
    }, []);

    return (
        <section className="border-b border-black/10 px-6 py-12 md:py-16">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_1fr]">

                {/* Latest News */}
                <div>
                    <div className="mb-6 flex items-end justify-between border-b border-red-500 pb-3">
                        <h2 className="text-xl font-black uppercase tracking-tight">
                            Latest News
                        </h2>

                        <Link
                            to="/"
                            className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-gray-600"
                        >
                            View All
                        </Link>
                    </div>

                    <div>
                        {latestArticles.map((story) => (
                            <article
                                key={story.id}
                                className="border-b border-black/10 py-6 first:pt-2"
                            >
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                    {story.category} · {story.readTime}
                                </p>

                                <h3 className="max-w-2xl text-xl font-bold leading-tight tracking-tight transition-colors hover:text-gray-500 md:text-2xl">
                                    <Link to={`/article/${story.slug}`}>
                                        {story.title}
                                    </Link>
                                </h3>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                                    {story.excerpt}
                                </p>

                                <Link
                                    to={`/article/${story.slug}`}
                                    className="mt-3 inline-block text-[10px] font-bold uppercase tracking-wider hover:text-red-500"
                                >
                                    Read Story →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Most Read */}
                <div>
                    <div className="mb-6 border-b border-black pb-3">
                        <h2 className="text-xl font-black uppercase tracking-tight">
                            Most Read
                        </h2>
                    </div>

                    <div>
                        {loadingMostRead ? (
                            <p className="py-5 text-sm text-gray-500">
                                Loading most-read stories...
                            </p>
                        ) : mostRead.length > 0 ? (
                            mostRead.map((story, index) => (
                        <article
                                key={story.id}
                                className="flex gap-5 border-b border-black/10 py-5 first:pt-2"
                        >
                                <span className="text-3xl font-black leading-none text-gray-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                    {story.category}
                                </p>

                                <h3 className="text-base font-bold leading-snug transition-colors hover:text-gray-500">
                                    <Link to={`/article/${story.slug}`}>
                                        {story.title}
                                    </Link>
                                </h3>

                                <p className="mt-2 text-xs text-gray-400">
                                    {story.viewCount.toLocaleString()} views
                                </p>
                            </div>
                        </article>
                        ))
                        ) : (
                            <p className="py-5 text-sm text-gray-500">
                                No readership data available yet.
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LatestNews;