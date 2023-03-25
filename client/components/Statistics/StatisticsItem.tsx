import React from "react";
import classNames from "classnames";

interface IStatisticsItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
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
        "flex flex-col items-center justify-center rounded-xl gap-1 px-3 py-4 shadow-light dark:shadow-dark",
        className
      )}
    >
      <div className="rounded-full bg-secondary-light flex items-center justify-center w-[4rem] h-[4rem] shadow-inner">
        {icon}
      </div>
      <span className="font-semibold text-[1.8rem] text-secondary-light">
        {value}
      </span>
      <span className="text-secondary-light text-[1rem]">{label}</span>
    </div>
  );
};

export default StatisticsItem;
