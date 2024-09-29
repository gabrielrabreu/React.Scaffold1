import { type LabelHTMLAttributes, type FC } from "react";
import classNames from "classnames";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <label
      className={classNames(
        "text-sm font-bold text-gray-700 tracking-wide",
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
