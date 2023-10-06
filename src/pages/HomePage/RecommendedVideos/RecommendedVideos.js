import React, { useState } from "react";
import RecommendedVideo from "./RecommendedVideo/RecommendedVideo";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Money Heist - Final Season",
      thumbnailUrl: "https://placehold.co/400x250?text=Money+Heist",
      description: "lorem ipsum dolor sit amet",
      views: "1M",
      publishedOn: "yesterday",
      isInWatchlist: true,
    },

    {
      id: 2,
      title: "Squid Games",
      thumbnailUrl: "https://placehold.co/400x250?text=Squid+Games",

      description: "lorem ipsum dolor sit amet",
      views: "1.2M",

      publishedOn: "2 days ago",
      isInWatchlist: false,
    },

    {
      id: 3,
      title: "H2O: Just Add Water",
      thumbnailUrl: "https://placehold.co/400x250?text=H20",
      description: "lorem ipsum dolor sit amet",
      views: "1.5M",
      publishedOn: "3 days ago",
      isInWatchlist: false,
    },

    {
      id: 4,
      title: "Lost in Space",
      thumbnailUrl: "https://placehold.co/400x250?text=Lost+in+Space",
      description: "lorem ipsum dolor sit amet",
      views: "1.6M",
      publishedOn: "4 days ago",
      isInWatchlist: true,
    }
  ]);

  const handleManageWatchlist = (index) => {
    const duplicateVideos = [...videos]; //spread operator
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;
    setVideos(duplicateVideos);
  };

  return (
    <div className="row">
      <p>We suggest some videos based on your watch history</p>

      <p>Videos Found: </p>
      {videos.length === 0 && (
        <div className="alert alert-warning">No recommended videos</div>
      )}
      {videos.map((video, index) => {
        return (
          <div className="col-md-3" key={video.id}>
            <RecommendedVideo
              title={video.title}
              description={video.description}
              views={video.views}
              publishedOn={video.publishedOn}
              thumbnailUrl={video.thumbnailUrl}
              isInWatchlist={video.isInWatchlist}
              index={index}
              handleManageWatchlist={handleManageWatchlist}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
