import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import PriceTable from "./components/PriceTable";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <PriceTable />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
