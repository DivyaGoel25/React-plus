import PropTypes from 'prop-types';

const LatestVideo = ({title,views,thumbnailUrl,publishedOn,children}) => {
    // receiving props as an argument
    //console.log({title,views,thumbnailUrl,publishedOn,description});
  
    // props are passed from the parent component
    // props are immutable i.e. they cannot be changed from inside the component
    // props are read-only
    // props.title = "New Title"; // this will throw an error
    // props are objects
    /// TO TEACH: props children
  
    return (
      <div className="card">
        <img src={thumbnailUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{views} Views</li>
          <li className="list-group-item">Published {publishedOn}</li>
        </ul>
      </div>
    );
  };
  LatestVideo.prototype={
    title:PropTypes.string,
    views:PropTypes.string,
    thumbnailUrl:PropTypes.string,
    publishedOn:PropTypes.string,
    children:PropTypes.string
  }
  export default LatestVideo;