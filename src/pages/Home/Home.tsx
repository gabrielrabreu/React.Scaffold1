import { type FC } from "react";

import { useNavigate } from "@tanstack/react-router";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button
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
