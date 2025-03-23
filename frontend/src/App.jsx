import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styles from "./style";
import { Info, Features, CallToAction, Footer, Navbar, Main, Product } from "./components";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      {location.pathname !== '/product' && (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Features />
            <Info />
            <CallToAction />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
