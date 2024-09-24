import { type FC } from "react";

const Header: FC = () => {
  return (
    <header className="p-2.5 mt-1 flex justify-center">
      <img src="logo.svg" alt="Logo" className="px-8" />
    </header>
  );
};

export default Header;
