import React from "react";

export default function StatsItem({ item }) {
  return (
    <div className="flex flex-col gap-y-4 p-8">
      <h5 className="text-stats text-35 leading-1.2 font-bold text-center">
        {item?.stats}
      </h5>
      <p className="text-center text-textDesc text-lg leading-1.6">
        {item?.name}
      </p>
    </div>
  );
}
