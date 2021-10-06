<template>
  <div class="todoapp">
    <header class="header">
        <h1>Todos</h1>
    </header>
      <!--form class="col-12 col-sm-10 col-md-8 cl-lg-6" @submit.prevent="SaveCard()"-->
      <form class="col-12 col-sm-10 col-md-8 cl-lg-6">
        <input type="text" v-model="cardContent" class="form-control" placeholder="creer une nouvelle carte" />
      </form>
      <b-button @click="SaveCard()" variant="success">Enregistrer</b-button>
      <!--b-button @click="addCard()" variant="success">Enregistrer</b-button-->
  </div>
</template>
<style src="./todo.css">

</style>
