import React from "react";

const MenMorris = () => {
  return (
    <div className="flex items-center w-full justify-center flex-col text-white h-full p-10  bg-black">
      Men&apos;s Morris Game
      <svg
        className="h-full w-full"
        viewBox="-6 -6 312 312" // extra space to prevent clipping
      >
        {/* Lines */}
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="300"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="150"
          x2="300"
          y2="150"
          stroke="white"
          strokeWidth="1"
        />
        <line x1="0" y1="0" x2="300" y2="300" stroke="white" strokeWidth="1" />
        <line x1="300" y1="0" x2="0" y2="300" stroke="white" strokeWidth="1" />

        {/* Points */}
        {[
          [0, 0],
          [150, 0],
          [300, 0],
          [0, 150],
          [150, 150],
          [300, 150],
          [0, 300],
          [150, 300],
          [300, 300],
        ].map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="6" fill="white" />
        ))}
      </svg>
    </div>
  );
};

export default MenMorris;
