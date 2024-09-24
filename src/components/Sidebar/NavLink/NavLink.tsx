import { type ReactNode, type FC } from "react";

import { Link, LinkProps } from "@tanstack/react-router";

interface Props extends LinkProps {
  title: string;
  icon?: ReactNode;
}

const NavLink: FC<Props> = ({ title, icon, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-100 text-gray-700 w-full text-left"
      >
        {icon}
        {icon ? (
          <span className="text-md ml-4 font-bold">{title}</span>
        ) : (
          <>{title}</>
        )}
      </Link>
    </li>
  );
};

export default NavLink;
