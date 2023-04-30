import React from "react";

export interface YearsOfExperienceProps {
  from: number;
}

export const YearsOfExperience = ({ from }: YearsOfExperienceProps) => {
  const years = new Date().getFullYear() - from;
  const halfDecades = Math.floor(years / 5) * 5;

  return (
    <>
      {halfDecades}
      <span>{years != halfDecades ? "+" : ""}</span>
    </>
  );
};
