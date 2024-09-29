import { type FC } from "react";
import { FaHouseChimney, FaMinimize, FaUser } from "react-icons/fa6";

import NavLink from "./NavLink";

export const TEST_IDS = {
  aside: "sidebar-expanded",
  toggleButton: "sidebar-expanded-toggle-button",
};

interface Props {
  onToggle: () => void;
}

const Expanded: FC<Props> = ({ onToggle }) => {
  return (
    <aside
      className="bg-white text-black shadow-md flex flex-col h-screen w-64"
      data-testid={TEST_IDS.aside}
    >
      <header className="flex items-center justify-center mt-1 p-2">
        <img src="large-icon.svg" alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-3xl text-indigo-500 font-black">scaffold</span>
      </header>

      <nav className="flex-grow mt-2">
        <ul>
          <NavLink title="Home" icon={<FaHouseChimney />} to="/" />
          <NavLink title="Profile" icon={<FaUser />} to="/profile" />
        </ul>
      </nav>

      <button
        className="flex items-center hover:bg-blue-100 text-gray-700 w-full text-left p-3.5"
        data-testid={TEST_IDS.toggleButton}
        onClick={onToggle}
      >
        <FaMinimize />
        <span className="text-md ml-4 font-bold">Minimize</span>
      </button>
    </aside>
  );
};

export default Expanded;
