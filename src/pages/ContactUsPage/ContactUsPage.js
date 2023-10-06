import { Helmet, HelmetProvider } from "react-helmet-async";
import { StyledButton } from "../Button/Button.styles";

const ContactUsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div>
        <div>ContactUsPage</div>
        <StyledButton>Styled Component</StyledButton>
      </div>
    </HelmetProvider>
  );
};

export default ContactUsPage;
