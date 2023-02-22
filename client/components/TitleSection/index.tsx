import React from "react";
import classNames from "classnames";

interface ITitleSectionProps {
  title: string;
  className?: string;
}
const TitleSection = ({ title, className }: ITitleSectionProps) => {
  return <h2 className={classNames("text-title text-2xl font-bold", className)}>{title}</h2>;
};

export default TitleSection;
