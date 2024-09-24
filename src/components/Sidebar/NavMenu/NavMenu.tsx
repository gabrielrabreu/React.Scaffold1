import { type ReactNode, type FC, useState } from "react";

import { FaChevronDown } from "react-icons/fa6";

interface Props {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const NavMenu: FC<Props> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li>
      <button
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-100 text-gray-700 w-full text-left"
        onClick={toggleDropdown}
      >
        {icon}
        <span className="text-md ml-4 font-bold">{title}</span>
        <FaChevronDown
          className={`ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <ul
        className={`mt-2 w-4/5 mx-auto text-gray-700 font-bold ${
          isOpen ? "" : "hidden"
        }`}
      >
        {children}
      </ul>
    </li>
  );
};

export default NavMenu;
