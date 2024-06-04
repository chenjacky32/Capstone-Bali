import React from "react";

export default function DestinationList({ api }) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 mx-auto mb-8 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-5">
      {api?.data?.Destination?.map((destination, index) => (
        <a
          href={`/destinations/${destination.id}`}
          className="relative block overflow-hidden transition-all rounded shadow-lg cursor-pointer text-color-primary hover:text-color-orange"
          key={index}
        >
          <div className="relative h-full">
            <img
              src={destination.img}
              alt={destination.name}
              width={200}
              height={300}
              className="object-cover w-full rounded max-h-96"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 p-4 font-bold bg-color-dark bg-opacity-80 md:text-xl">
              {destination.name}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
