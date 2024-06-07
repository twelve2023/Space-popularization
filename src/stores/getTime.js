import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useTimeStore = defineStore('time', () => {
  const state = reactive({
    lastVisitedTime: '',
  })

  // 计算属性，用于格式化上次访问时间
  const lastVisited = computed(() => {
    return state.lastVisitedTime
      ? new Date(state.lastVisitedTime).toLocaleString()
      : 'Never'
  })

  // 更新上次访问时间
  const updateLastVisited = () => {
    state.lastVisitedTime = new Date().toISOString()
    localStorage.setItem('lastVisitedTime', state.lastVisitedTime)
  }

  // 初始化时从localStorage中读取上次访问时间
  if (localStorage.getItem('lastVisitedTime')) {
    state.lastVisitedTime = localStorage.getItem('lastVisitedTime')
  }

  return {
    lastVisited,
    updateLastVisited
  }
})


