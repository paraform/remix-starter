import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";
import { Stitches, CSS } from "../../../stitches.config";
import { button } from "./button.styles";

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  Stitches.VariantProps<typeof button> & { css?: CSS };

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      css,
      unconstrained,
      icon,
      kind,
      colorway,
      size,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={button({
          className,
          css,
          unconstrained,
          kind,
          colorway,
          size,
          icon,
        })}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
