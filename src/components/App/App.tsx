//Global
import React, { useState, useEffect } from "react";

//Components
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { News } from "../News/News";

//Services
import { fetchTopStories } from "../../services/newsAPI";

//Styles
import "./App.scss";

export function App() {
  const [stories, setStories] = useState<any[]>([]),
    [loading, setLoading] = useState<boolean>(true),
    [limit, setLimit] = useState<number>(15),
    [storyCategory, setStoryCategory] = useState<string>(
      localStorage.getItem("category") || "topstories"
    );

  const fetchStories = async (category: string, limit: number) => {
    setLoading(true);

    try {
      const data = await fetchTopStories(category, limit);

      setStories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("category", storyCategory);
  }, [storyCategory]);

  useEffect(() => {
    fetchStories(storyCategory, limit);

    const interval = setInterval(() => {
      fetchStories(storyCategory, limit);
    }, 30000);

    return () => clearInterval(interval);
  }, [storyCategory, limit]);

  return (
    <>
      <Header
        setCategory={setStoryCategory}
        onFetchStories={() => fetchStories(storyCategory, limit)}
      />

      <div className="main">
        <h1>VK News {storyCategory.toUpperCase()}</h1>

        <News loading={loading} stories={stories} />

        {!loading && (
          <div className="block-buttons">
            <button onClick={() => setLimit(prev => prev + 15)}>
              Показать больше
            </button>

            <button
              onClick={() => {
                if (limit !== 15) setLimit(prev => prev - 15);
              }}
            >
              Показать меньше
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
