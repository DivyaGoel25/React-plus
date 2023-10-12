// HOC is JS function
// that takes in a Component as input and returns a new Component as output

const applyStyles = (OriginalComponent) => { // receiving the component as input
  // returns a new Component as output
  const NewComponent = (props) => {
    return (
      <div className="red-box">
        <OriginalComponent {...props}/>
      </div>
    );
  }

  // returning the new component
  return NewComponent;
}

export default applyStyles;