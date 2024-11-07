import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses, limit }) => {
  const Businesslimit = businesses ? businesses.slice(0, limit) : [];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Businesslimit.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
