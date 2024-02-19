import React from "react";

function DetailInfo({ img, fullName, city, abbr, conference, division }) {
  return (
    <article
      className={`h-full w-full flex  items-center justify-center p-4 border-2 border-gray-200 rounded-lg shadow`}
    >
      <picture className="flex items-center justify-center flex-1">
        <img className=" w-80 aspect-square" src={img} alt={img} />
      </picture>
      <div className="flex items-center flex-col gap-6 justify-center flex-1">
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <p className="text-3xl font-medium">{fullName}</p>
          <div className="flex justify-center items-center gap-6">
            <p>City: {city}</p>
            <p>Abbreviation: {abbr}</p>
          </div>
        </div>
        <div className="w-full">
          <hr className="border border-gray-200 w-full" />
        </div>
        <div className="w-full flex gap-6 justify-center items-center">
          <p>Conference: {conference}</p>
          <p>Division: {division}</p>
        </div>
      </div>
    </article>
  );
}

export default DetailInfo;
