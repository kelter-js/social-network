import * as axios from 'axios';

const samuraiInstance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '3fb46a3e-6490-460b-8c43-075fa7280e3f',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

const userAPI = {
  getUserList(currentPage, pageSize) {
    return samuraiInstance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      })
  },
  followUser(id) {
    return samuraiInstance.post(`follow/${id}`);
  },
  unfollowUser(id) {
    return samuraiInstance.delete(`follow/${id}`);
  },
  getProfile(id) {
    return samuraiInstance.get(`profile/${id}`);
  },
  authenticateUser() {
    return samuraiInstance.get('auth/me');
  }
};

export default userAPI;
