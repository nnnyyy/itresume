<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import {useAuth} from '@/stores/auth'
import axios from '@/plugins/axios'
import { onMounted } from 'vue';
const auth = useAuth();

onMounted( async ()=> {
  const ret = await axios.post('/api/init')
  console.log(ret)
})

const onBtnTest = async ()=> {
  const ret = await axios.post('/api/test')
  console.log(ret)
}

</script>

<template>
  <div>
    <button @click="onBtnTest">테스트 버튼</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
