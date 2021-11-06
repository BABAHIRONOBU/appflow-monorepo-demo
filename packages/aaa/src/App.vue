<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { hello } from '@baba/bbb';
import { Capacitor } from '@capacitor/core';
import { Deploy } from 'cordova-plugin-ionic';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    onMounted(async () => {
      hello();

      if (Capacitor.isNativePlatform()) {
        const update = await Deploy.checkForUpdate();

        if (update.available) {
          alert('업데이트합니다.');

          await Deploy.downloadUpdate();
          await Deploy.extractUpdate();
          await Deploy.reloadApp();
        }
      }
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
