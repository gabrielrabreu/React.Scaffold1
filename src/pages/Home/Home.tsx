import { type FC } from "react";

import { useNavigate } from "@tanstack/react-router";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl">Home</h2>
      <p>This is the page content.</p>

      <button
        className="border p-2 mt-4"
        onClick={() => {
          navigate({ to: "/auth/login" });
        }}
      >
        To login
      </button>
    </div>
  );
};

export default Home;
