import { type FC } from "react";
import { FaHouseChimney, FaMinimize, FaUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

import NavLink from "./NavLink";

interface Props {
  onToggle: () => void;
}

const Expanded: FC<Props> = ({ onToggle }) => {
  return (
    <aside className="bg-white text-black shadow-md flex flex-col h-screen w-64" data-testid="expanded-mode">
      <header className="flex items-center justify-center mt-2 p-2">
        <img src="large-icon.svg" alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-3xl text-indigo-500 font-black">scaffold</span>
      </header>

      <nav className="flex-grow mt-2">
        <ul>
          <NavLink title="Home" icon={<FaHouseChimney />} to="/" />
          <NavLink title="Profile" icon={<FaUser />} to="/profile" />
          <NavLink title="Logout" icon={<TbLogout2 />} to="/auth/login" />
        </ul>
      </nav>

      <button
        className="flex items-center hover:bg-blue-100 text-gray-700 w-full text-left p-3.5"
        onClick={onToggle}
        data-testid="toggle"
      >
        <FaMinimize />
        <span className="text-md ml-4 font-bold">Minimize</span>
      </button>
    </aside>
  );
};

export default Expanded;
