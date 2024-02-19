import React from "react";
import { Link } from "react-router-dom";

function DetailTitle({ teamName }) {
  return (
    <div
      className={`flex items-center m-4 mb-0 mt-0  w-full h-32 p-4 border-2 border-gray-200 rounded-lg shadow justify-start `}
    >
      <Link className=" w-24" to="/teams">
        {"<"}- Go Back
      </Link>
      <p className="text-center justify-self-center w-full italic text-5xl font-medium">
        {teamName}
      </p>
    </div>
  );
}

export default DetailTitle;
