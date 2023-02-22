import React from "react";
import classNames from "classnames";
import TitleSection from "../TitleSection";

interface ICustomSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}
const CustomSection = ({
  title,
  titleClassName,
  className,
  children,
}: ICustomSectionProps) => {
  return (
    <section
      className={classNames("flex flex-col gap-5", className)}
    >
      <TitleSection title={title} className={titleClassName} />
      {children}
    </section>
  );
};

export default CustomSection;
