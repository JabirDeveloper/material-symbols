import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGrade = (grade: string) => {
  const gradeMap: { [key: string]: number } = {
    low: -25,
    normal: 0,
    high: 200,
  };
  return gradeMap[grade] || 0;
};

export const getWeight = (weight: string): number => {
  const weightMap: { [key: string]: number } = {
    thin: 100,
    extra_light: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semi_bold: 600,
    bold: 700,
  };
  return weightMap[weight] || 400;
};
