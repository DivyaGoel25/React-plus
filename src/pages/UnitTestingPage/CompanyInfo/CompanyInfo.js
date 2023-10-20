import { useState } from "react";

const CompanyInfo = (props) => {
  const [countryName, setCountryName] = useState("USA");

  return (
    <div>
      <h2>Testing JSX, Props, States, Events, Styles and Snapshot Demo!</h2>
      <h4>Company Info</h4>
      <p data-testid="companyName">Company Name: Cognizant</p>
      <p data-testid="foundedYear" style={{ color: "#ff0000" }}>
        The Company Founded in: {props.foundedYear}
      </p>

      <input
        type="text"
        placeholder="Enter Country Name"
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p>Please visit Cognizant {countryName} Website</p>
    </div>
  );
};

export default CompanyInfo;