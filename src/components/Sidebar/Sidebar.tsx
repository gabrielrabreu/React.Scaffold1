import { type FC } from "react";
import { FaHouseChimney } from "react-icons/fa6";

import NavLink from "./NavLink";
import Header from "./Header";

const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-white text-black p-4 shadow-md">
      <Header />

      <nav className="mt-8">
        <ul>
          <NavLink title="Home" icon={<FaHouseChimney />} to="/" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
