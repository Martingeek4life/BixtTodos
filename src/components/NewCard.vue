<template>
    <div class="card">
        <div class="card-content">
          <p>{{ description }}</p>
        </div>
        <div class="button-content">
            <div class="button update" @click="SaveCard()">Modifier</div>
            <div class="button delete" @click="deleteTodo(e)">Supprimer</div>
            <!--b-button href="#" class="b-button" variant="success">Modifier</b-button>
            <b-button href="#" class="b-button" variant="danger">Supprimer</b-button-->
        </div>
    </div>
</template>

<script>
export default {
  props: {
    todos: {},
    description: String,
    completed: Boolean
  },
  data () {
    return {
      newCard: ''
    }
  },
  methods: {
    toggleTodo (todo) {
      todo.completed = !todo.completed
    },
    /* deleteTodo (deletedTodo) { */
    deleteTodo (deletedTodo) {
      alert(event.target.tagName)
      alert(this.todos.description)
      this.todos = this.todos.filter(todo => todo !== deletedTodo)
    },
    editTodo (todo, newTodoDescription) {
      todo.description = newTodoDescription
    }
  }
}
</script>

<style scoped>
    .card {
        /* height: 20vh; */
        width: 90%;
        background-color: #c0c0c0;
        margin: 5% auto;
    }
    .card-content {
        /* height: 70%; */
        background-color: #c0c0c0;
    }
    .button-content {
        /* height: 30%; */
        display: flex;
        justify-content: space-around;
    }
    .button {
        /*  height: 80%; */
        width: 45%;
        margin-top: auto;
        margin-bottom: auto;
        vertical-align: middle;
        border-radius: 5px 5px 5px 5px;
    }
    .update {
        background-color: cyan;
    }
    .delete {
        background-color: red;
    }
</style>
