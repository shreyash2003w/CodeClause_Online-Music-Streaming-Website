import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CgSmileNeutral } from "react-icons/cg";
import { motion } from "framer-motion";

const Alert = ({ type }) => {
  return (
    <motion.div
      initial={{ translateX: 100, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 100, opacity: 0 }}
      key={type}
      className={`fixed top-12 right-12 px-4 py-2 rounded-md backdrop-blur-md flex items-center justify-center shadow-xl
        ${type === "success" && "bg-green-400"} 
        ${type === "danger" && "bg-red-400"}`}
    >
      {type === "success" && (
        <div className="flex items-center justify-evenly">
          <BsEmojiSmile className="text-xl text-primary" />
          <p className="text-normal font-semibold text-primary px-1">
            Data Saved
          </p>
        </div>
      )}

      {type === "danger" && (
        <div className="flex items-center justify-evenly">
          <CgSmileNeutral className="text-xl text-primary" />
          <p className="text-normal font-semibold text-primary px-1">
            Something went wrong ...
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Alert;
