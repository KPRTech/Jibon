import React, { useEffect, useState } from "react";
import NewsEvents from "../pages/theLatestPage/NewsEvents";
import AchievementHeader from "./AchievementHeader";

const NewsStories = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  useEffect(() => {
    fetch("newsDetails.json")
      .then((res) => res.json())
      .then((data) => setNewsEvents(data));
  }, []);
  return (
    <div>
      <div className={`block`}>
        <AchievementHeader
          achiveHeader={"NEWS, STORIES AND EVENTS"}
          achiveDescription={
            "Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."
          }
        ></AchievementHeader>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-[180px]">
        {newsEvents.slice(0, 3).map((news) => (
          <NewsEvents
            key={news.id}
            news={news}>
          </NewsEvents>
        ))}
      </div>
    </div>
  );
};

export default NewsStories;
