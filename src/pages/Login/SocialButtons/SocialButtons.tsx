import { type FC } from "react";

const SocialButtons: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-3">
      <span className="w-11 h-11 items-center justify-center inline-flex rounded-full bg-white border border-gray-300 hover:shadow-lg cursor-pointer transition ease-in duration-300">
        <img className="w-4 h-4" src="/google-logo.svg" alt="Google Logo" />
      </span>
    </div>
  );
};

export default SocialButtons;
