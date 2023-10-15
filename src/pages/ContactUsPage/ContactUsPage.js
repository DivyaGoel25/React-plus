import { Helmet, HelmetProvider } from "react-helmet-async";
import { StyledButton } from "../Button/Button.styles";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

const ContactUsPage = () => {
  const userStatus = useContext(PageContext);
  console.log(userStatus);
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div>
        <div>ContactUsPage</div>
        <p>Username: {userStatus.username}</p>
        <p>Last Login: {userStatus.lastLogin.toString()}</p>
        <p>Is Premium User: {userStatus.isPremiumUser?"yes":"no"}</p>
        <StyledButton>Styled Component</StyledButton>
      </div>
    </div>
  );
};

export default ContactUsPage;
