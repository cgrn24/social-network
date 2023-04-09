import axios from 'axios'
import { ProfileType } from '../redux/types'

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
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
  },
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get('profile/' + userId)
  },
  getStatus(userId: number) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status: string) {
    return instance.put('profile/status', { status: status })
  },
  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('image', photoFile)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profile: ProfileType | null) {
    return instance.put(`profile`, profile)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post('auth/login', { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete('auth/login')
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  },
}
