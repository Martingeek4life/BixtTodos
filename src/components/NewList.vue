<template>
<div class="big">
    <div class="list">
        <header>le titre</header>
        <div class="list-content">
            <new-card
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            :todos="todos"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
            />
        </div>
        <footer>
            <div>
                <b-button @click="modalShow = !modalShow">Open Modal</b-button>
                <b-modal v-model="modalShow">
                    <form class="col-12 col-sm-10 col-md-8 cl-lg-6">
                        <input type="text" v-model="cardContent" class="form-control" placeholder="creer une nouvelle carte" />
                    </form>
                    <b-button @click="SaveCard()" variant="success">Enregistrer</b-button>
                </b-modal>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
import NewCard from './NewCard'
export default {
  components: {
    NewCard
  },
  props: {
    listName: String,
    showCard: this.cardContent
  },
  data () {
    return {
      todos: [
        { description: 'carte 1', completed: false },
        { description: 'carte 2', completed: false },
        { description: 'carte 3', completed: false }
      ],
      cardContent: '',
      modalShow: false
    }
  },
  methods: {
    addTodo (cardContent) {
      this.todos.push({ description: this.cardContent, completed: false })
      this.cardContent = ''
    },
    SaveCard () {
      if (this.cardContent.length > 0) {
        this.$emit('on-new-card', this.cardContent)
        this.todos.push({ description: this.cardContent, completed: false })
      }
      this.cardContent = ''
    },
    toggleTodo (todo) {
      todo.completed = !todo.completed
    },
    deleteTodo (deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo)
    },
    editTodo (todo, newTodoDescription) {
      todo.description = newTodoDescription
    }
  }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        text-decoration-color: none;
    }
    .big {
        display: flex;
        justify-content: space-between;
    }
    .list {
        height: 80vh;
        width: 20%;
        margin-top: 10vh;
        background-color: rgb(240, 247, 247);
        box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.38);
    }
    header, footer {
        /* height: 5%; */
        background: rgb(170, 170, 170);
        border-radius: 10px 10px 0 0;
    }
    .list-content, #list-content{
        height: 90%;
    }

    .card {
        /* height: 20vh; */
        width: 90%;
        background-color: #aa0ba2;
        margin: 5% auto;
    }
    .card-content {
        height: 70%;
        background-color: rgb(208, 248, 196);
    }
    .button-content {
        height: 30%;
        display: flex;
        justify-content: space-around;
    }
    .button {
        height: 80%;
        width: 45%;
        margin-top: auto;
        margin-bottom: auto;
        vertical-align: middle;
        border-radius: 5px 5px 5px 5px;
    }
    .save {
        background-color: cyan;
    }
    .cancel {
        background-color: red;
    }
</style>
