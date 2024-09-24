import { type FC } from "react";

import { FaBell } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="border-b bg-indigo-500 text-black p-6">
      <nav className="flex justify-between items-center">
        <div></div>
        <div className="flex items-center space-x-4">
          <button>
            <FaBell className="text-white h-4 w-4" />
          </button>
          <button>
            <img
              src="large-icon.svg"
              alt="Ícone de Usuário"
              className="bg-white p-1 rounded-full h-8 w-8"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
