import { type FC } from "react";
import { FaRegBell } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";

import AccountDropdown from "./AccountDropdown";

const Header: FC = () => {
  return (
    <header className="border-b bg-white">
      <nav className="flex justify-between items-center">
        <div></div>
        <div className="flex items-center space-x-1">
          <button className="hover:bg-gray-200 p-3 rounded-md">
            <FaRegBell className="h-4 w-4" />
          </button>
          <button className="hover:bg-gray-200 p-3 rounded-md">
            <RiUserSettingsLine className="h-4 w-4" />
          </button>
          <AccountDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
