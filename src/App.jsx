import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import { FirebaseProvider } from "./Firebase/Firebase";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Diarypage from "./components/Diarypage";
import History from "./components/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <FirebaseProvider>
          <Nav />
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Footer />
        </FirebaseProvider>
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
        <FirebaseProvider>
          <Nav />
          <Diarypage />
          <Footer />
        </FirebaseProvider>
      </>
    ),
  },
  {
    path: "/history",
    element: (
      <>
        <FirebaseProvider>
          <Nav />
          <History />
          <Footer />
        </FirebaseProvider>
      </>
    ),
  },
]);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
