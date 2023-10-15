import { Helmet, HelmetProvider } from "react-helmet-async";
import LatestVideo from "./LatestVideo/LatestVideo";
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos";
import Subscription from "./Subscription/Subscription";
import TrendingVideos from "./TrendingVideos/TrendingVideos";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1 className="text-center">Let's learn about Core React Concepts!</h1>
        <hr />

        <h2>Latest Videos | Demo of Props</h2>

        <div className="row">
          <div className="col-md-3">
            <LatestVideo
              title="Chhetri strike downs Bangladesh in football"
              thumbnailUrl="https://placehold.co/400x250"
              views="1M"
              publishedOn="today"
            >
              The 39-year-old veteran scored from the spot in the 85th minute.
            </LatestVideo>
          </div>

          <div className="col-md-3">
            <LatestVideo
              title="Australia vs India ODI"
              thumbnailUrl="https://placehold.co/400x250"
              views="1M"
              publishedOn="today"
            >
              Pat Cummins and Steven Smith, back from injury as they take on the
              Asia Cup champions
            </LatestVideo>
          </div>
          <div className="col-md-3">
            <LatestVideo
              title="Asian Games 2023"
              thumbnailUrl="https://placehold.co/400x250"
              views="1.7M"
              publishedOn="yesterday"
            >
              Asian games 2023 will be held in China
            </LatestVideo>
          </div>
          <div className="col-md-3">
            <LatestVideo
              title="Bayern Munich 4-3 Man Utd"
              thumbnailUrl="https://placehold.co/400x250"
              views="1.5M"
              publishedOn="yesterday"
            >
              Harry Kane nets first Champions League goal for hosts to beat Man
              Utd in group opener
            </LatestVideo>
          </div>
        </div>

        <h2>Trending Videos | Demo of States, Events</h2>
        <TrendingVideos />
        <hr />
        <h2>
          Recommended Videos | Demo of States, Events, Conditional Rendering,
          Lists & Keys
        </h2>
        <RecommendedVideos />

        <hr />
        <h2>Demo of Styles in React App</h2>
        <Subscription />
      </div>
    </div>
  );
};

export default HomePage;
