import { icons, statistics } from "@/utils/constants";
import React from "react";
import StatisticsItem from "./StatisticsItem";

const StatisticsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[50px] nth-child-1n:text-custom-red nth-child-2n:text-custom-green nth-child-3n:text-custom-red nth-child-4n:text-primary">
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
