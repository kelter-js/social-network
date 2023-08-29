import * as axios from "axios";

const network = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "30217e1e1-05a7-4762-8f23-1cde107e677c",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

const userAPI = {
  async getUserList(currentPage, pageSize) {
    try {
      const response = await network.get(
        `users?page=${currentPage}&count=${pageSize}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (err) {
      return [];
    }
  },
  followUser: (id) => network.post(`follow/${id}`),
  unfollowUser: (id) => network.delete(`follow/${id}`),
  getProfile: (id) => profileAPI.getProfile(id),
};

export const authAPI = {
  authenticateMe: () => network.get("auth/me"),
  login: (data) => network.post("auth/login", data),
  logout: () => network.delete("auth/login"),
};

export const profileAPI = {
  getProfile: (id) => network.get(`profile/${id}`),
  getStatus: (id) => network.get(`profile/status/${id}`),
  updateStatus: (status) => network.put("profile/status", { status: status }),
  updateProfile: (data) => network.put("profile", data),
  savePhoto: (photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    return network.put("profile/photo ", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default userAPI;
