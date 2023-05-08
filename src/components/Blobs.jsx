import React from "react";
import blobTopLeft from "../assets/blob-top-left.svg";
import blobTopRight from "../assets/blob-top-right2.png";

const blobs = () => {
  return (
    <div className="mt-56 -z-50 ">
      <div className="blob-top-left absolute top-0 left-0 -ml-20 -mt-28 -z-20">
        <img src={blobTopLeft} alt="" />
      </div>
      <div className="blob-top-right absolute right-0 top-0 -z-30">
        <img src={blobTopRight} alt="" />
      </div>
    </div>
  );
};

export default blobs;
