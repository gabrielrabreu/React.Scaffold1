import { type FC } from "react";

export const TEST_IDS = {
  heading: "profile-heading",
  content: "profile-content",
};

const Profile: FC = () => {
  return (
    <div>
      <h2 className="text-xl" data-testid={TEST_IDS.heading}>
        Profile
      </h2>
      <p data-testid={TEST_IDS.content}>This is the page content.</p>
    </div>
  );
};

export default Profile;
