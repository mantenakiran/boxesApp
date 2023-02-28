const Box = (props) => {
  //  Write your code here.
  const { text, boxSpecs } = props;
  return (
    <div className={boxSpecs}>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <Box text="small" boxSpecs="smallBox" />
    <Box text="Medium" boxSpecs="MediumBox" />
    <Box text="Large" boxSpecs="LargeBox" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
