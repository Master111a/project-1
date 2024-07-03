import React from "react";
import star from "../../../assets/star.svg";
export default function DestinationItem({ item }) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full aspect-square">
        <img
          src={item?.image}
          alt="image"
          className="w-full h-full object-cover object-center rounded-t-32"
        />
      </div>
      <div className="flex flex-col p-8 gap-8 w-full">
        <div className="flex flex-col gap-y-4 w-full">
          <div className="flex w-full text-23 font-bold leading-1.2">
            <h4 className="text-textDesc max-w-4/5 text-wrap">{item?.name}</h4>
            <div className="text-strongTextColor">${item?.price}</div>
          </div>
          <p className="text-textDesc/75 text-left text-lg leading-1.2">
            {item?.country}
          </p>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <span>{item?.rate}</span>
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
  );
}
