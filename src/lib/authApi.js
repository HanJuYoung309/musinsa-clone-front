// src/lib/authApi.js
import { http, tokenStore } from "./http";

export const authApi = {
  async signup(form) {
    return http.post("/auth/signup", form);
  },
  async login(form) {
    const res = await http.post("/auth/login", form);
    tokenStore.setTokens(res.data);
    return res.data;
  },
  async logout() {
    tokenStore.clearTokens();
  },
  async me() {
    const res = await http.get("/auth/me");
    return res.data;
  },
};
