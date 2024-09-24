import { createLazyFileRoute } from "@tanstack/react-router";

import Profile from "@/pages/Profile";

export const Route = createLazyFileRoute("/_private/profile")({
  component: Profile,
});
