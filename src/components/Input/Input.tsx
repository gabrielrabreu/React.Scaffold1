import { type FC, type InputHTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<Props> = ({ className, ...rest }) => {
  return (
    <input
      className={classNames(
        "w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
