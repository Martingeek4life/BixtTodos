<template>
  <div class="suggested-area">
    <h5>MEMBERS</h5>
    <ul>
      <li>join</li>
    </ul>
    <!--affichage de la description-->
    <h5>DESCRIPTION</h5>
    <p>{{card.description}}</p>
    <textarea name="" id="add-card-textarea-title" autofocus="" v-model="descriptionInput" placeholder="Ajouter une description à votre carte..."></textarea>
    <div class="btn-group controls-add-card">
      <button type="button" class="btn btn-info btn-add-card" @click="addDescription">Add</button>
    </div>

    <!--affichage de la checklist-->
    <Checklists :card="card" :checklist="checklist"></Checklists>
  </div>
</template>

<script src="./SuggestedArea.js"></script>
<style src="./SuggestedArea.css" scoped></style>
