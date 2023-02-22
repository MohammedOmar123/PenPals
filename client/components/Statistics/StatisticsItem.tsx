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
        "flex flex-col items-center justify-center rounded-xl gap-2 px-3 py-6 shadow-inner",
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
