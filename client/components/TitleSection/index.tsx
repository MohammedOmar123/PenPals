import React from "react";
import classNames from "classnames";

interface ITitleSectionProps {
  title: string;
  className?: string;
}
const TitleSection = ({ title, className }: ITitleSectionProps) => {
  return <h2 className={classNames("text-title text-xl font-bold dark:text-secondary-light", className)}>{title}</h2>;
};

export default TitleSection;
