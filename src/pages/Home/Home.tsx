import { type FC } from "react";

export const TEST_IDS = {
  heading: "home-heading",
  content: "home-content",
};

const Home: FC = () => {
  return (
    <div>
      <h2 className="text-xl" data-testid={TEST_IDS.heading}>
        Home
      </h2>
      <p data-testid={TEST_IDS.content}>This is the page content.</p>
    </div>
  );
};

export default Home;
