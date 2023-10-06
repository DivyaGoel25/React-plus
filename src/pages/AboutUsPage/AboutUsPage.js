import { Helmet, HelmetProvider } from "react-helmet-async"

const AboutUsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>About Us</h1>
  </HelmetProvider>
  )
}

export default AboutUsPage