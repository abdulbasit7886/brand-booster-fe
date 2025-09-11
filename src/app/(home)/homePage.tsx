import React from "react";
import Header from "../components/page component/Header";
import HowWorks from "../components/page component/HowWorks";
import ResultCard from "../components/common/ResCard";
import Casestudy from "../components/page component/Casestudy";
import PulishPackage from "../components/page component/PulishPackage";
import Pricing from "../components/page component/Pricing";
import MoneyBack from "../components/page component/MoneyBack";
import Whyuse from "../components/page component/Whyuse";
import Question from "../components/page component/Question";
import ReadyGrow from "../components/common/ReadyGrow";
import Footer from "../components/page component/Footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HowWorks />
      <ResultCard />
      <Casestudy />
      <PulishPackage />
      {/* <Pricing /> */}
      <MoneyBack />
      <Whyuse />
      <Question />
      <div className="px-[3%]">
        <ReadyGrow />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
