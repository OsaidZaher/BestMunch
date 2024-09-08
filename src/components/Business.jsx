import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Business = ({ business }) => {
  return (
    <a href={business.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="flex flex-col md:flex-row rounded-lg bg-gray-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-200 md:max-w-xl h-full"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex-shrink-0">
          <img
            className="w-full h-48 object-cover rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
            src={business.imageSrc}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {business.name}
          </h5>
          <div className="mb-4 text-base text-neutral-700 dark:text-neutral-700">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipcode}
            </p>
          </div>
          <div className="text-sm text-neutral-700 dark:text-neutral-400">
            <h3>{business.category}</h3>
            <div className="flex items-center space-x-1">
              {[...Array(Math.floor(business.rating))].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-400"
                />
              ))}
              {business.rating % 1 !== 0 && (
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400"
                  style={{ opacity: 0.5 }}
                />
              )}
              <span className="text-neutral-700 dark:text-neutral-400">
                {" "}
                ({business.rating})
              </span>
            </div>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default Business;
