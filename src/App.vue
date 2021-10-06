<template>
  <div id="app">
    <!--todo-list list-name="My to-dos" /-->
    <router-view/>
  </div>
</template>

<script>
// import TodoList from './components/todoGit/TodoList.vue'
export default {
  name: 'App'
  /*,
  components: {
    TodoList
  }
  */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
