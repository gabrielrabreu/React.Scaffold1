import { type FC } from "react";
import { FaHouseChimney, FaMaximize, FaUser } from "react-icons/fa6";

import NavLink from "./NavLink";

export const TEST_IDS = {
  aside: "sidebar-collapsed",
  toggleButton: "sidebar-collapsed-toggle-button",
};

interface Props {
  onToggle: () => void;
}

const Collapsed: FC<Props> = ({ onToggle }) => {
  return (
    <aside
      className="bg-white text-black shadow-md flex flex-col h-screen w-12"
      data-testid={TEST_IDS.aside}
    >
      <header className="flex items-center justify-center mt-1 p-2">
        <img src="large-icon.svg" alt="Logo" className="h-10 w-10" />
      </header>
      <nav className="flex-grow mt-2">
        <ul>
          <NavLink icon={<FaHouseChimney />} to="/" />
          <NavLink icon={<FaUser />} to="/profile" />
        </ul>
      </nav>
      <button
        className="flex items-center justify-center hover:bg-blue-100 text-gray-700 w-full text-left p-3.5"
        data-testid={TEST_IDS.toggleButton}
        onClick={onToggle}
      >
        <FaMaximize />
      </button>
    </aside>
  );
};

export default Collapsed;
