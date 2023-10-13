import applyStyles from "../../hoc/applyStyles";
import Bye from "./Bye/Bye"
import Hello from "./Hello/Hello";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {

  return (
    <div>
      <h1>Higher Order Components (HOC) Demo Page</h1>

      <StyledHello name="John" />
      <StyledBye name="John" />
    </div>
  );
}

export default HocDemoPage;