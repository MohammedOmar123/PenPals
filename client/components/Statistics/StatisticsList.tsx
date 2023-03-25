import { icons, statistics } from "@/utils/constants";
import React from "react";
import StatisticsItem from "./StatisticsItem";

const StatisticsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px] [&>*:nth-child(1)]:bg-[#B54949] [&>*:nth-child(2)]:bg-[#49B58E] [&>*:nth-child(3)]:bg-[#B349B5] [&>*:nth-child(4)]:bg-[#49A2B5]">
      {statistics.map((item, index) => {
        return (
          <StatisticsItem
            key={index}
            label={item.label}
            value={item.value}
            icon={icons[item.title]}
          />
        );
      })}
    </div>
  );
};

export default StatisticsList;
