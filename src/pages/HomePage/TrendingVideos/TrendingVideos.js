import { useState } from "react";
import TrendingVideo from "./TrendingVideo/TrendingVideo";

const TrendingVideos = () => {
  const [resolution, setResolution] = useState("4K");
  console.log(resolution);

  const handleChangeResolution = () => {
    setResolution("8K");
  };
  const [videos, setVideos] = useState([
    {
      id: 1,

      title: "BBC Earth: The Power of Nature",

      thumbnailUrl: "https://placehold.co/400x250?text=BBC+Earth",

      description: "lorem ipsum dolor sit amet",

      views: "1M",

      publishedOn: "yesterday",
    },

    {
      id: 2,

      title: "Expendables 4: The Final Battle",

      thumbnailUrl: "https://placehold.co/400x250?text=Expendables+4",

      description: "lorem ipsum dolor sit amet",

      views: "1.2M",

      publishedOn: "2 days ago",
    },

    {
      id: 3,

      title: "Squid Games",

      thumbnailUrl: "https://placehold.co/400x250?text=Squid+Games",

      description: "lorem ipsum dolor sit amet",

      views: "1.5M",

      publishedOn: "3 days ago",
    },

    {
      id: 4,

      title: "Money Heist Season 5",

      thumbnailUrl: "https://placehold.co/400x250?text=Money+Heist+Season+5",

      description: "lorem ipsum dolor sit amet",

      views: "1.6M",

      publishedOn: "4 days ago",
    },
  ]);

  return (
    <div className="row">
      <p>Enjoy the trending videos in stunning {resolution} resolution</p>
      <button onClick={handleChangeResolution} className="btn btn-primary mb-2">
        Change resolution
      </button>

      <div className="col-md-3">
        <TrendingVideo
          title={videos[0].title}
          thumbnailUrl={videos[0].thumbnailUrl}
          description={videos[0].description}
          views={videos[0].views}
          publishedOn={videos[0].publishedOn}
        />
      </div>

      <div className="col-md-3">
        <TrendingVideo
          title={videos[1].title}
          thumbnailUrl={videos[1].thumbnailUrl}
          description={videos[1].description}
          views={videos[1].views}
          publishedOn={videos[1].publishedOn}
        />
      </div>
      <div className="col-md-3">
        <TrendingVideo
          title={videos[2].title}
          thumbnailUrl={videos[2].thumbnailUrl}
          description={videos[2].description}
          views={videos[2].views}
          publishedOn={videos[2].publishedOn}
        />
      </div>
      <div className="col-md-3">
        <TrendingVideo
          title={videos[3].title}
          thumbnailUrl={videos[3].thumbnailUrl}
          description={videos[3].description}
          views={videos[3].views}
          publishedOn={videos[3].publishedOn}
        />
      </div>
    </div>
  );
};

export default TrendingVideos;
