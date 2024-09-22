import { type FC, type InputHTMLAttributes } from "react";

import { type ValidationError } from "@tanstack/react-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors: ValidationError[];
}

const FormField: FC<Props> = ({ name, label, errors, ...rest }) => {
  return (
    <div className="content-center">
      <label
        className="text-sm font-bold text-gray-700 tracking-wide"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        {...rest}
      />
      {errors ? (
        <em
          role="alert"
          className="mt-2 text-sm text-red-600 dark:text-red-500"
        >
          {errors.join(", ")}
        </em>
      ) : null}
    </div>
  );
};

export default FormField;
