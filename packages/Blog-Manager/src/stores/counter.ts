import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import request from '@/lib/request'
export const useUserInfo = defineStore('userInfo', () => {
  let info = ref(null);

  async function updateUserInfo() {
    // TODO: 获取用户信息
    let { data } = await request.get('/api/user');
    info.value = data[0] || {};
  }

  return { info, updateUserInfo }
})
