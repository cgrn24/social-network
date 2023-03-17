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
    return instance.delete(`follow/${userId}`)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  getProfile(userId: number | string) {
    return instance.get(`profile/` + userId)
  },
}

export const profileAPI = {
  getProfile(userId: number | string) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: number | string) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status: string) {
    return instance.put('profile/status', { status: status })
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
}
