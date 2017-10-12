<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// add this line
import TodoList from './components/TodoList'


export default {
  name: 'app',
  // Main Component App.vue
  components: {
    TodoList,
    createTodo,
  },
// App.vue

  methods: {
    addTodo(title) {
      this.todos.push({
        title,
        done: false,
      });
    },
  },
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
