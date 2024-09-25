import { type ReactNode, type FC } from "react";

import { Link, type LinkProps } from "@tanstack/react-router";

interface Props extends LinkProps {
  isExpanded?: boolean;
  icon?: ReactNode;
}

const NavLink: FC<Props> = ({ icon, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center justify-center hover:bg-gray-300 text-gray-700 w-full text-left p-3.5"
        activeProps={{
          className: "bg-gray-200",
        }}
        activeOptions={{ exact: true }}
      >
        {icon}
      </Link>
    </li>
  );
};

export default NavLink;
