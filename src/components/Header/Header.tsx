import { type FC } from "react";

import { FaBell } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="border-b bg-indigo-500 text-black p-4">
      <nav className="flex justify-between items-center">
        <div></div>
        <div className="flex items-center space-x-4">
          <button>
            <FaBell className="text-white h-4 w-4" />
          </button>
          <button>
            <img
              src="https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
              alt="Ícone de Usuário"
              className="rounded-full h-10 w-10"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
