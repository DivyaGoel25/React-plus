// Component can be made up of JS, JSX and CSS (optional)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/ErrorBoundary/ErrorBoundary";
import { PageContext } from "./contexts/PageContext";
import AppRoutes from "./routes/AppRoutes";

const userStatus = {
  username: "Divya",
  isPremiumUser: true,
  lastLogin: new Date(),
};
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
          <PageContext.Provider value={userStatus}>
              {/* TODO: create a component for all these routes */}
              <AppRoutes />
          </PageContext.Provider>
        </main>

        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// exporting the component
export default App;
