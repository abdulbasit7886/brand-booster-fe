import React from "react";
import TotalVisitcard from "./TotalVisitcard";

const RestrictedTop = () => {
  return (
    <div className="mt-11 space-y-5 ">
      <div className="space-y-1 text-center">
        <h1 className="text-5xl text-blue-900  font-extrabold uppercase font-futura">
          best for restricted Topic
        </h1>
        <p className="text-sm text-textB text-center ">
          Ideal for promoting challenging topics & niches like supplements,
          trading, alcohol, etc. This package <br /> provides basic exposure &
          reach.
        </p>
      </div>
      <TotalVisitcard/>
    </div>
  );
};

export default RestrictedTop;
