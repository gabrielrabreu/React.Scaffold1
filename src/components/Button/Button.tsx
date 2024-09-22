import { type ButtonHTMLAttributes, type FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold transition ease-in duration-300 
        focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer 
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
