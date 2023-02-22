import React from "react";
import classNames from "classnames";

interface IStatisticsItemProps {
  value: number;
  label: string;
  icon: string;
  className?: string;
}

const StatisticsItem = ({
  label,
  value,
  icon,
  className,
}: IStatisticsItemProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center rounded-xl min-w-[220px] min-h-[200px] [@media(min-width:2000px)]:min-h-[300px] [@media(min-width:3000px)]:min-w-[300px] gap-3 p-3 shadow-inner",
        className
      )}
    >
      <img src={icon} alt={label} />
      <span className="font-semibold text-[32px]">{value}</span>
      <span>{label}</span>
    </div>
  );
};

export default StatisticsItem;
