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
  weight = "normal",
  opticalSize = 24,
  grade = "normal",
  fontSize = "base",
  children,
  className,
  ...rest
}) => {
  // Pastikan `getWeight` dan `getGrade` selalu mengembalikan nilai yang valid
  const wght = getWeight(weight) ?? 400; // Default weight 400 (normal)
  const grd = getGrade(grade) ?? 0; // Default grade 0 (normal)

  const styles = `'FILL' ${filled ? 1 : 0}, 'wght' ${wght}, 'GRAD' ${grd}, 'opsz' ${opticalSize}`;

  return (
    <span
      {...rest}
      style={{ fontVariationSettings: styles }}
      className={cn(
        `material-symbols-${variants} text-${fontSize}`,
        className || ""
      )}
    >
      {children}
    </span>
  );
};

export default Symbols;
