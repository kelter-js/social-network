import * as axios from 'axios';

const network = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '3fb46a3e-6490-460b-8c43-075fa7280e3f',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

const userAPI = {
  getUserList(currentPage, pageSize) {
    return network
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      })
  },
  followUser: (id) => network.post(`follow/${id}`),
  unfollowUser: (id) => network.delete(`follow/${id}`),
  getProfile: (id) => profileAPI.getProfile(id),
};

export const authAPI = {
  authenticateMe: () => network.get('auth/me'),
  login: (data) => network.post('auth/login', data),
  logout: () => network.delete('auth/login'),
};

export const profileAPI = {
  getProfile: (id) => network.get(`profile/${id}`),
  getStatus: (id) => network.get(`profile/status/${id}`),
  updateStatus: (status) => network.put('profile/status', { status: status }),
};

export default userAPI;
