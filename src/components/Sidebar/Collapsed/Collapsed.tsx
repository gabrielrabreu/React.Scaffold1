import { type FC } from "react";
import { FaHouseChimney, FaMaximize, FaUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

import NavLink from "./NavLink";

interface Props {
  onToggle: () => void;
}

const Collapsed: FC<Props> = ({ onToggle }) => {
  return (
    <aside
      className="bg-white text-black shadow-md flex flex-col h-screen w-12"
      data-testid="collapsed-mode"
    >
      <header className="flex items-center justify-center mt-2 p-2">
        <img src="large-icon.svg" alt="Logo" className="h-10 w-10" />
      </header>
      <nav className="flex-grow mt-2">
        <ul>
          <NavLink icon={<FaHouseChimney />} to="/" />
          <NavLink icon={<FaUser />} to="/profile" />
          <NavLink icon={<TbLogout2 />} to="/auth/login" />
        </ul>
      </nav>
      <button
        className="flex items-center justify-center hover:bg-blue-100 text-gray-700 w-full text-left p-3.5"
        onClick={onToggle}
        data-testid="toggle"
      >
        <FaMaximize />
      </button>
    </aside>
  );
};

export default Collapsed;
