<template>
<div class="todoapp">
    <header class="header">
        <h1>Todos</h1>
        <input type="text" name="" class="new-todo" placeholder="Ajouter une tache">
    </header>
    <div class="main">
        <ul class="todo-list">
            <li class="todo">
                <div class="view">
                    <label for="">Nom de la tache ajoutée</label>
                    <div>
                        <b-button>Button</b-button>
                        <b-button variant="danger">Button</b-button>
                        <b-button variant="success">Button</b-button>
                        <b-button variant="outline-primary">Button</b-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<style src="./todo.css">

</style>
