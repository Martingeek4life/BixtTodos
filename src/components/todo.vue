<template>
<section class="todoapp">
    <header class="header">
        <h1>Todos</h1>
        <input type="text" name="" class="new-todo" placeholder="Ajouter une tache">
    </header>
    <div class="main">
        <ul class="todo-list">
            <li class="todo">
                <div class="view">
                    <label for="">Nom de la tache ajoutée</label>
                    <router-link :to="{name: 'workspaces'}">Workspace</router-link>
                    <router-link :to="{name: 'accueil'}">Accueil</router-link>
                </div>
            </li>
        </ul>
    </div>
</section>
</template>
<style src="./todo.css">

</style>
