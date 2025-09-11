import React from "react";
import TotalVisitcard from "./TotalVisitcard";

const RestrictedTop = () => {
  return (
    <div className="mt-11 space-y-5 lg:px-0">
      <div className="space-y-1 text-center  px-2 ">
        <h1 className="lg:text-5xl text-2xl text-blue-900  font-extrabold uppercase font-futura">
          best for restricted Topic
        </h1>
        <p className="lg:text-sm text-xs text-textB text-center lg:w-[37%]  w-[80%] mx-auto">
          Ideal for promoting challenging topics & niches like supplements,
          trading, alcohol, etc. This package  provides basic exposure &
          reach.
        </p>
      </div>
      <TotalVisitcard/>
    </div>
  );
};

export default RestrictedTop;
