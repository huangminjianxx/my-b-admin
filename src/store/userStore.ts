// src/store/userStore.ts
import { create } from 'zustand'
import { getToken, setToken, removeToken } from '@/utils/token'

interface UserState {
  token: string | null
  username: string
  role: string
  menuList: any[]

  // 方法
  login: (token: string, userInfo: { username: string; role: string }) => void
  logout: () => void
  setMenuList: (list: any[]) => void
}

export const useUserStore = create<UserState>((set) => ({
  // 初始化从本地读取token
  token: getToken(),
  username: '111',
  role: '',
  menuList: [],

  // 登录
  login: (token, userInfo) => {
    setToken(token)
    set({
      token,
      username: userInfo.username,
      role: userInfo.role
    })
  },

  // 退出清空所有
  logout: () => {
    removeToken()
    set({
      token: null,
      username: '',
      role: '',
      menuList: []
    })
  },

  // 设置后端返回菜单
  setMenuList: (list) => set({ menuList: list })
}))