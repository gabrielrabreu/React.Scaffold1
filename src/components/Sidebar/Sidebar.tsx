import { type FC } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { MdSignpost } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import NavLink from "./NavLink";
import Header from "./Header";
import NavMenu from "./NavMenu";

const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-white text-black p-4 shadow-md">
      <Header />

      <nav className="mt-8">
        <ul>
          <NavLink title="Home" icon={<FaHouseChimney />} to="/" />
          <NavLink title="Profile" icon={<FaUser />} to="/profile" />
          <NavMenu title="Auth" icon={<MdSignpost />}>
            <NavLink title="Login" to="/auth/login" />
          </NavMenu>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
