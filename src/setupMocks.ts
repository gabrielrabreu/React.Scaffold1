import AxiosMockAdapter from "axios-mock-adapter";

import { api } from "@/libs/api";

const mock = new AxiosMockAdapter(api);

mock.onPost("/login").reply(200, {
  email: "test@example.com",
  username: "test",
});
