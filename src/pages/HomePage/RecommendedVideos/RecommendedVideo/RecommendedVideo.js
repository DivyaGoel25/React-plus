import PropTypes from "prop-types";

const RecommendedVideo = ({
  thumbnailUrl,
  title,
  description,
  views,
  publishedOn,
  isInWatchlist,
  index,
  handleManageWatchlist,
}) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{views}</li>

        <li className="list-group-item">Published {publishedOn}</li>
        <li className="list-group-item">
          <button
            className="btn btn-success btn-sm"
            onClick={() => {
              handleManageWatchlist(index);
            }}
          >
            {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
          </button>
        </li>
      </ul>
    </div>
  );
};

RecommendedVideo.propTypes = {
  views: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string,
  isInWatchlist: PropTypes.bool,
  index: PropTypes.number,
  handleManageWatchlist: PropTypes.func,
};

export default RecommendedVideo;
