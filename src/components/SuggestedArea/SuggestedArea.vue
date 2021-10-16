<template>
  <div class="suggested-area">
    <Members :card="card"></Members>
    <!--affichage de la description-->
    <h5>DESCRIPTION</h5>
    <span>{{card.description}}</span>
    <button class="btn btn-primary border-5 ml-2"  @click="showTextArea=true" v-if="!showTextArea">Modify</button>
    <div v-if="showTextArea">
      <textarea name="" id="add-card-textarea-title" autofocus="" v-model="descriptionInput" placeholder="Ajouter une description à votre carte..."></textarea>
      <div class="btn-group controls-add-card">
        <button class="btn btn-primary border-5 ml-2 btn-add-card"  @click="addDescription">Add</button>
        <span class="close-check" @click="showTextArea=false">&times;</span>
      </div>
    </div>
    <!--affichage de la checklist-->
    <Checklists :card="card" :checklist="checklist"></Checklists>
  </div>
</template>

<script src="./SuggestedArea.js"></script>
<style src="./SuggestedArea.css" scoped></style>
