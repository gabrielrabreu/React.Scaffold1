import { type FC } from "react";
import { FaGithub } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="border-t text-black p-4 mt-12 xl:mt-0">
      <div className="flex justify-between items-center">
        <div>
          <a
            className="text-gray-800 hover:text-gray-600"
            href="https://github.com/gabrielrabreu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-gray-800 text-sm">
          &copy; 2024 Gabriel Abreu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
