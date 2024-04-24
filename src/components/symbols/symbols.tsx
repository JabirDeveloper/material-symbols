"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn, getGrade, getWeight } from "./utils";

interface SymbolsProps extends HTMLAttributes<HTMLSpanElement> {
  filled?: boolean;
  variants?: "outlined" | "rounded" | "sharp";
  opticalSize?: 20 | 24 | 40 | 48;
  weight?:
    | "thin"
    | "extra_light"
    | "light"
    | "normal"
    | "medium"
    | "semi_bold"
    | "bold";
  grade?: "low" | "normal" | "high";
  fontSize?: "md" | "sm" | "lg" | "xl" | "base" | "inherit" | "2xl" | "3xl";
}

const Symbols: FC<PropsWithChildren<SymbolsProps>> = ({
  filled = false,
  variants = "outlined",
  weight,
  opticalSize,
  grade,
  fontSize = "base",
  children,
  className,
  ...rest
}) => {
  const wght = getWeight(weight || "normal");
  const grd = getGrade(grade || "normal");
  const styles = `'FILL' ${
    filled ? 1 : 0
  }, 'wght' ${wght}, 'GRAD' ${grd}, 'opsz' ${opticalSize ?? 24}`;
  return (
    <span
      {...rest}
      style={{ fontVariationSettings: styles }}
      className={cn(
        `material-symbols-${variants} text-${fontSize}  `,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Symbols;
