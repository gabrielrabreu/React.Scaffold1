import { useRef, useState, type FC } from "react";
import { TbLogout2 } from "react-icons/tb";

import { Link } from "@tanstack/react-router";

import { useOutsideClick } from "@/hooks/useOutsideClick";

const AccountDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button
        className="hover:bg-gray-200 p-3.5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
          alt="Ícone de Usuário"
          className="w-10 h-10 shrink-0 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="origin-top-left absolute right-0 mt-2 rounded-md shadow-lg bg-white px-2 py-2 divide-y divide-gray-200 w-64">
          <header className="flex space-x-4 items-center p-2">
            <div className="flex mr-auto items-center space-x-4 w-full">
              <img
                src="https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
                alt="Ícone de Usuário"
                className="w-16 h-16 shrink-0 rounded-full"
              />
              <div className="space-y-2 flex flex-col flex-1 truncate">
                <div className="font-medium relative text-sm leading-tight text-gray-900">
                  <span className="flex">
                    <span className="truncate relative pr-8 w-full">
                      No Reply
                    </span>
                  </span>
                </div>
                <p className="font-normal text-xs leading-tight text-gray-500 truncate w-full">
                  noreply@scaffold.com
                </p>
              </div>
            </div>
          </header>
          <footer className="pt-2">
            <Link
              to="/auth/login"
              className="flex items-center space-x-3 p-2 w-full leading-6 text-sm hover:bg-gray-200 rounded-md"
            >
              <TbLogout2 />
              <span>Logout</span>
            </Link>
          </footer>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
