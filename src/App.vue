<template>
  <div id="app">
    <div class="btn" v-ripple="{ios: true}">Button</div>
    <div class="btn" v-ripple="{center: true}">Center</div>

    <div class="content" v-ripple>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe culpa sunt voluptas ex nobis. Delectus, illum, fugit iusto deserunt, dolore a quae quidem officia pariatur dolor officiis facilis voluptates quam!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background: cornflowerblue;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  user-select: none;
}

.content {
  max-width: 500px;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 20px;
  color: orange;
  div {
    color: #000;
  }
}
</style>
