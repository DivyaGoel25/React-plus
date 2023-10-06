import PropTypes from "prop-types";

const TrendingVideo = ({title,views,thumbnailUrl,publishedOn,description}) => {
  return (
    <div className="card">
          <img
            src={thumbnailUrl}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{views}</li>
            <li className="list-group-item">{publishedOn}</li>
          </ul>
        </div>
  )
}

TrendingVideo.prototype={
  title:PropTypes.string,
  views:PropTypes.string,
  thumbnailUrl:PropTypes.string,
  publishedOn:PropTypes.string,
  description:PropTypes.string
}

export default TrendingVideo