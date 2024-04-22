"use client";

import { FC, PropsWithChildren } from "react";
import { cn, getGrade, getWeight } from "./utils";

interface SymbolsProps extends PropsWithChildren {
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
  fontSize?: "md" | "sm" | "lg" | "xl" | "base";
  className?: string | undefined;
}

const Symbols: FC<SymbolsProps> = ({
  filled = false,
  variants = "outlined",
  weight,
  opticalSize,
  grade,
  fontSize = "base",
  children,
  className
}) => {
  const wght = getWeight(weight || "normal");
  const grd = getGrade(grade || "normal");
  const styles = `'FILL' ${
    filled ? 1 : 0
  }, 'wght' ${wght}, 'GRAD' ${grd}, 'opsz' ${opticalSize ?? 24}`;
  return (
    <span
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
