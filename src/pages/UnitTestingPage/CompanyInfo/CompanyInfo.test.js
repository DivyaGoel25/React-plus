// Here you write the test cases
// How to write the Test cases? AAA
// Arrange
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import CompanyInfo from "./CompanyInfo";

// test suite = group of related test specs
describe('CompanyInfo', () => {
  // test spec #1
  // Testing JSX
  it("has right heading", () => {
    // Act
    render(<CompanyInfo />);
    const headingElement = screen.getByText(
      "Testing JSX, Props, States, Events, Styles and Snapshot Demo!"
    );

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  // test spec #2
  it("has Company Info text", () => {
    render(<CompanyInfo />);

    // using reg exp pattern
    const companyInfoText = screen.getByText(/company info/i); // i stands for case-insensitive
    expect(companyInfoText).toBeInTheDocument();
  });

  it("should have Cognizant as company name", () => {
    render(<CompanyInfo />);
    const companyName = screen.getByTestId("companyName"); // give last preference to getByTestId
    expect(companyName.textContent).toBe("Company Name: Cognizant");
  });

  // Testing Props -- must in all places where you receive props in any project
  it("receives foundedYear prop and displays in JSX", () => {
    render(<CompanyInfo foundedYear="2001" />);
    const foundedYear = screen.getByTestId("foundedYear");
    expect(foundedYear.textContent).toBe("The Company Founded in: 2001");
  });

  // TODO: Testing Props -- headquarters = Teaneck, New Jersey, U.S
  // In browser I want the output to be 'Headquarters: Teaneck, New Jersey, U.S'

  // Testing inline css
  it("has Founded year text in color #ff0000", () => {
    render(<CompanyInfo foundedYear="2001" />);
    const foundedYear = screen.getByTestId("foundedYear");
    // recommended to use color code in hexa or rgb -- not color name
    expect(foundedYear).toHaveStyle("color: #ff0000");
  });

  // TODO: Testing external css -- test whether the button element has css class 'btn'

  // Testing to find out whether the input has the right placeholder
  it("has an input with Enter Country Name as placeholder", () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText("Enter Country Name");
    expect(countryInput).toBeTruthy();
  });

  // Testing states and Events -- must in all components
  it('displays country name USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);

    // find input element
    const countryInput = screen.getByPlaceholderText("Enter Country Name");
    // then check whether the input has default value USA
    expect(countryInput.value).toBe('USA');

    const mockEvent = {
      target: {
        value: "Japan",
      },
    };
    
    // now, checking whether the onChange event handler is working or not
    // as the comp is rendered in test runner, we can't use mouse or keyboard as input devices
    // so, Let's trigger the event thru program
    fireEvent.change(countryInput, mockEvent);
    expect(countryInput.value).toBe("Japan");
    // TODO: also check the paragraph for the country name change
  });

  // Snapshot Testing
  it('has the right CompanyInfo component snapshot with all requirements completed', () => {
    // To take snapshot -- we need react-test-renderer // npm i react-test-renderer -D
    // Taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible as well as props children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear="2001" />).toJSON();
    expect(snapshotInJson).toMatchSnapshot();
  });

  // TODO: learn about the disadvantages of snapshot testing
});