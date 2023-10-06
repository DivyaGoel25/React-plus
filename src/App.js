// Component can be made up of JS, JSX and CSS (optional)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Fallback from "./components/ErrorBoundary/ErrorBoundary";
import UsersPage from "./pages/UsersPage/UsersPage";
import AddUser from "./pages/UsersPage/AddUser/AddUser";
import UserDetails from "./pages/UsersPage/UserDetails/UserDetails";

// App Component Definition
// this is the ideal place for the layout
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Header></Header>

        <main className="mt-5 pt-2 container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/*static urls first come then dynamic*/}
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/:userid" element={<UserDetails />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// exporting the component
export default App;
