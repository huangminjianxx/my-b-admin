// src/store/appStore.ts
import { create } from 'zustand'

interface AppState {
  siderCollapsed: boolean // 侧边是否折叠
  loading: boolean         // 全局接口loading

  toggleSider: () => void
  setLoading: (val: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  siderCollapsed: true,
  loading: false,

  toggleSider: () => set((state) => ({
    siderCollapsed: !state.siderCollapsed
  })),

  setLoading: (val) => set({ loading: val })
}))