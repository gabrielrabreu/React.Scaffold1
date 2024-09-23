import { api } from "@/libs/api";

import { type LoginResponse, type LoginBody } from "@/types/auth";

export const login = async (body: LoginBody): Promise<LoginResponse> => {
  return await api
    .post<LoginResponse>("login", body)
    .then((response) => response.data);
};
