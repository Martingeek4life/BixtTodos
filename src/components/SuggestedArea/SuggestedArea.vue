<template>
  <div class="suggested-area">
    <h5>MEMBERS</h5>
    <ul>
      <li>join</li>
    </ul>
    <!--affichage de la description-->
    <h5>DESCRIPTION</h5>
    <span>{{card.description}}</span>
    <button type="button" class="btn btn-info btn-add-card" @click="showTextArea=true" v-if="!showTextArea">Modifier</button>
    <div v-if="showTextArea">
      <textarea name="" id="add-card-textarea-title" autofocus="" v-model="descriptionInput" placeholder="Ajouter une description à votre carte..."></textarea>
      <div class="btn-group controls-add-card">
        <button type="button" class="btn btn-info btn-add-card" @click="addDescription">Ajouter</button>
        <span class="close-check" @click="showTextArea=false">&times;</span>
      </div>
    </div>
    <!--affichage de la checklist-->
    <Checklists :card="card" :checklist="checklist"></Checklists>
  </div>
</template>

<script src="./SuggestedArea.js"></script>
<style src="./SuggestedArea.css" scoped></style>
