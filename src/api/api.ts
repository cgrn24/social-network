import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '6db0aff4-bda8-4df9-8071-4eea2acfbc33' },
})

export const usersApi = {
  getUsers(currentPage: number | string, pageSize: number | string) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  follow(userId: number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  getProfile(userId: number | string) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
  },
}

export const authAPI = {
  me() {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
  },
}
